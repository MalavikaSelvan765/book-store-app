from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/books')
def books():
    return jsonify([
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "url": "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "url": "https://www.planetebook.com/free-ebooks/1984.pdf"
        }
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

