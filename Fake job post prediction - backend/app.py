import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.preprocessing import LabelEncoder
import re
from nltk.tokenize import RegexpTokenizer
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords
import numpy as np
import joblib
import warnings

warnings.filterwarnings("ignore")
app = Flask(__name__)
CORS(app)

nltk.download("stopwords")
stop_words = set(stopwords.words("english"))
default_stemmer = PorterStemmer()
default_stopwords = stopwords.words("english")
default_tokenizer = RegexpTokenizer(r"\w+")
lb_make = LabelEncoder()

loaded_vectorizer = joblib.load("tfidf_vectorizer.pkl")
rfc = joblib.load("random_forest_model.pkl")
sparse_matrix_x = joblib.load("sparse_matrix_x.pkl")


def clean_text(text):
    if text is not None:
        text = re.sub(r"[0-9]+", "", text)
        text = text.lower()
        text = re.sub("re:", "", text)
        text = re.sub("-", "", text)
        text = re.sub("_", "", text)
        text = re.sub(r"^https?:\/\/.*[\r\n]*", "", text, flags=re.MULTILINE)
        text = re.sub(r"\S*@\S*\s?", "", text, flags=re.MULTILINE)
        text = re.sub("\[[^]]*\]", "", text)
        text = re.sub(r"[^\w\s]", "", text)
        text = re.sub(r"\n", " ", text)
        text = re.sub(r"[0-9]+", "", text)
        p = re.compile(r"<.*?>")
        text = re.sub(r"\'ve", " have ", text)
        text = re.sub(r"can't", "cannot ", text)
        text = re.sub(r"n't", " not ", text)
        text = re.sub(r"I'm", "I am", text)
        text = re.sub(r" m ", " am ", text)
        text = re.sub(r"\'re", " are ", text)
        text = re.sub(r"\'d", " would ", text)
        text = re.sub(r"\'ll", " will ", text)

        text = p.sub("", text)

    def tokenize_text(text, tokenizer=default_tokenizer):
        token = default_tokenizer.tokenize(text)
        return token

    def remove_stopwords(text, stop_words=default_stopwords):
        tokens = [w for w in tokenize_text(text) if w not in stop_words]
        return " ".join(tokens)

    def stem_text(text, stemmer=default_stemmer):
        tokens = tokenize_text(text)
        return " ".join([stemmer.stem(t) for t in tokens])

    text = stem_text(text)
    text = remove_stopwords(text)
    return text


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    job_title = data.get("jobTitle")
    has_logo = data.get("hasLogo")
    department = data.get("department")
    company_profile = data.get("companyProfile")
    description = data.get("description")
    benefits = data.get("benefits")
    requirements = data.get("requirements")
    telecommuting = data.get("telecommuting")
    has_questions = data.get("hasQuestions")
    experience = data.get("experience")
    education = data.get("education")
    employment = data.get("employment")
    industry = data.get("industry")
    functiondata = data.get("functiondata")

    job_title = data.get("jobTitle")
    print("Job Title:", job_title)

    has_logo = data.get("hasLogo")
    print("Has Logo:", has_logo)

    department = data.get("department")
    print("Department:", department)

    company_profile = data.get("companyProfile")
    print("Company Profile:", company_profile)

    description = data.get("description")
    print("Description:", description)

    benefits = data.get("benefits")
    print("Benefits:", benefits)

    requirements = data.get("requirements")
    print("Requirements:", requirements)

    telecommuting = data.get("telecommuting")
    print("Telecommuting:", telecommuting)

    has_questions = data.get("hasQuestions")
    print("Has Questions:", has_questions)

    experience = data.get("experience")
    print("Experience:", experience)

    education = data.get("education")
    print("Education:", education)

    employment = data.get("employment")
    print("Employment:", employment)

    industry = data.get("industry")
    print("Industry:", industry)

    functiondata = data.get("functiondata")
    print("Function Data:", functiondata)

    data = {
        "title": job_title,
        "department": department,
        "company_profile": company_profile,
        "description": description,
        "requirements": requirements,
        "benefits": benefits,
        "telecommuting": telecommuting,
        "has_company_logo": has_logo,
        "has_questions": has_questions,
        "required_experience": experience,
        "required_education": education,
        "industry": industry,
        "employment_type": employment,
        "function": functiondata,
    }

    newdf = pd.DataFrame(data, index=[0])
    newdf["text"] = newdf[
        [
            "title",
            "department",
            "company_profile",
            "description",
            "requirements",
            "benefits",
        ]
    ].apply(lambda x: " ".join(x), axis=1)
    newdf.drop(
        [
            "title",
            "department",
            "company_profile",
            "description",
            "requirements",
            "benefits",
        ],
        axis=1,
        inplace=True,
    )
    newdf_columns = newdf.columns.tolist()
    label_columns = [
        "employment_type",
        "required_experience",
        "required_education",
        "industry",
        "function",
    ]
    for i in label_columns:
        newdf[i] = lb_make.fit_transform(newdf[i])
    newdf_columns = newdf_columns[-1:] + newdf_columns[:-1]
    newdf = newdf[newdf_columns]
    newdf["text"] = newdf["text"].apply(clean_text)
    newdf1 = loaded_vectorizer.transform(newdf["text"])
    newdf.drop(["text"], axis=1, inplace=True)
    newmain_df = pd.concat(
        [
            pd.DataFrame(
                newdf1.toarray(), columns=loaded_vectorizer.get_feature_names_out()
            ),
            newdf,
        ],
        axis=1,
    )
    newX = newmain_df.iloc[:, :]
    newX.fillna(0, inplace=True)
    print("newX shape:", newX.shape)
    newrfc_predict = rfc.predict(newX)
    print("Predicted label:", newrfc_predict[0])

    body = {}
    data = {}

    data["class"] = str(newrfc_predict[0])
    data["job_title"] = job_title
    data["company_profile"] = company_profile
    data["required_experience"] = experience
    data["required_education"] = education
    data["description"] = description
    body["data"] = data
    print(data)
    response = jsonify(body)
    return response
