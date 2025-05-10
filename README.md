
# Afghan Proverbs API 🇦🇫

## Project Description

A RESTful API for managing Afghan proverbs in Dari, Pashto, and English.  
Supports full CRUD operations, keyword search, and random proverb fetch.


---

##  How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Nazrana/afghan-proverbs.git
cd afghan-proverbs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=proverbsdb
DB_USER=postgres
DB_PASSWORD=postgres
```

### 4. Run the server

```bash
npm run dev
```

Visit: `http://localhost:3000`

---

##  Example Requests & Responses (using curl)

###  1. Create a Proverb (POST /proverbs)

**Request:**
```bash
curl -X PUT http://localhost:3000/proverbs/11 -H "Content-Type: application/json" -d '  {
        "id": 11,
        "textdari": "آب که یکجا شد دریا می‌شود",
        "textpashto": "اوبه چې سره یو شي سمندر کېږي",
        "translationen": "When waters join, they become a sea.",
        "meaning": "Unity makes strength.",
        "category": "wisdom"
    }'
```

**Response:**
```json
  {
        "id": 11,
        "textdari": "آب که یکجا شد دریا می‌شود",
        "textpashto": "اوبه چې سره یو شي سمندر کېږي",
        "translationen": "When waters join, they become a sea.",
        "meaning": "Unity makes strength.",
        "category": "wisdom"
    }
```

---

###  Get All Proverbs (GET /proverbs)

```bash
curl http://localhost:3000/proverbs
```

**Response:**
```json
[
    {
        "id": 1,
        "textdari": "ز گهواره تا گور دانش بجوی",
        "textpashto": "له زانګو تر ګورې علم زده کړه",
        "translationen": "Seek knowledge from cradle to grave",
        "meaning": "یادگیری تا آخر عمر ضروری‌ست",
        "category": "wisdom"
    },
    {
        "id": 2,
        "textdari": "دیر آید، درست آید",
        "textpashto": "که ناوخته راشي، خو سم راشي",
        "translationen": "Better late than never",
        "meaning": "تاخیر بهتر از نادرست بودن است",
        "category": "patience"
    },
    {
        "id": 3,
        "textdari": "آب که از سر پرید، چه یک نیزه چه صد نیزه",
        "textpashto": "اوبه چې له سره واوړي، فرق نه کوي یوه نیزه وي که سل",
        "translationen": "Once the water passes your head, depth doesn’t matter",
        "meaning": "وقتی کار خراب شد، مقدارش مهم نیست",
        "category": "philosophy"
    },
    {
        "id": 4,
        "textdari": "آب را نادیده، موزه از پا کشیدن خطاست",
        "textpashto": "اوبه نه وي لیدلي، خو جرابې وباسي",
        "translationen": "Don’t take off your shoes before seeing the water",
        "meaning": "عجله در تصمیم اشتباه است",
        "category": "caution"
    },
    {
        "id": 5,
        "textdari": "از یک دست صدا بر نمی‌خیزد",
        "textpashto": "یوه لاس غږ نه لري",
        "translationen": "One hand cannot clap",
        "meaning": "همکاری و اتحاد ضروری است",
        "category": "unity"
    },
    {
        "id": 6,
        "textdari": "کوه به کوه نمی‌رسد، آدم به آدم می‌رسد",
        "textpashto": "غره غره ته نه رسيږي، خو انسان انسان ته رسيږي",
        "translationen": "Mountains never meet, but people do",
        "meaning": "دنیا کوچک است و مردم به هم می‌رسند",
        "category": "social"
    },
    {
        "id": 7,
        "textdari": "بز به غم جان کندن، قصاب به غم گوشت",
        "textpashto": "وز د خپل ژوند فکر دی، قصاب د غوښې",
        "translationen": "The goat worries about its life, the butcher about the meat",
        "meaning": "نگرانی‌ها از دیدگاه متفاوت است",
        "category": "irony"
    },
    {
        "id": 8,
        "textdari": "داشته را آید بکار، گرچه باشد زهرمار",
        "textpashto": "که څه لري، هغه کار ته ورځي، که زهر هم وي",
        "translationen": "Even poison may be useful if one possesses it",
        "meaning": "داشتن بهتر از نداشتن است",
        "category": "value"
    },
    {
        "id": 9,
        "textdari": "شتر در خواب بیند پنبه دانه",
        "textpashto": "اوښ په خوب کې پنبې ویني",
        "translationen": "The camel dreams of cottonseed",
        "meaning": "آرزوهای دور از دسترس",
        "category": "sarcasm"
    },
    {
        "id": 10,
        "textdari": "در به تو می‌گویم، دیوار تو بشنو",
        "textpashto": "تا ته وایم، خو دېواله ته یې واوره",
        "translationen": "O door, I am talking to you so the wall hears",
        "meaning": "کنایه از اینکه مخاطب واقعی کسی دیگر است، ولی حرف را به تو می‌زنم تا او بشنود",
        "category": "indirect"
    },
    {
        "id": 11,
        "textdari": "آب که یکجا شد دریا می‌شود",
        "textpashto": "اوبه چې سره یو شي سمندر کېږي",
        "translationen": "When waters join, they become a sea.",
        "meaning": "Unity makes strength.",
        "category": "wisdom"
    }
]
```

---

### 3. Search Proverbs (GET /proverbs/search?keyword=sea)

```bash
curl http://localhost:3000/proverbs/search?keyword=sea
```

**Response:**
```json
[
    {
        "id": 11,
        "textdari": "آب که یکجا شد دریا می‌شود",
        "textpashto": "اوبه چې سره یو شي سمندر کېږي",
        "translationen": "When waters join, they become a sea.",
        "meaning": "Unity makes strength.",
        "category": "wisdom"
    }
]
```

---



### 4. Get Random Proverb (GET /proverbs/random)

```bash
curl http://localhost:3000/proverbs/random
```

**Response:**
```json
{
    "id": 3,
    "textdari": "ز گهواره تا گور دانش بجوی",
    "textpashto": "له زانګو تر ګورې علم زده کړه",
    "translationen": "Seek knowledge from cradle to grave",
    "meaning": "Learning is a lifelong process",
    "category": "wisdom"
}
```

---

### 5. Update Proverb (PUT /proverbs/:id)

```bash
curl -X PUT http://localhost:3000/proverbs/1 -H "Content-Type: application/json" -d '{"meaning": "Consequences follow actions"}'
```

---

###  6. Delete Proverb (DELETE /proverbs/:id)

```bash
curl -X DELETE http://localhost:3000/proverbs/1
```

---

##  Deployed API (Render)

🔗 https://afghan-proverbs.onrender.com

Try:
```
https://afghan-proverbs.onrender.com/proverbs
https://afghan-proverbs.onrender.com/proverbs/random
```

---

## Tech Stack

- Node.js + Express  
- PostgreSQL  
- Hosted on Render  
- Tested with Postman and curl  

---

## Author

Nazrana  
[https://github.com/Nazrana](https://github.com/Nazrana)
