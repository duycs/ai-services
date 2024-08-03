# AI API
- NodeJS .TS
- Google Gemini 
- Openai 

## Environment

```sh
npm install
```

## Keys
- [https://makersuite.google.com/app/apikey]
- [https://platform.openai.com/]

Update your `.env` file with your GEMINI_API_KEY, OPENAI_API_KEY

## Build

```sh
npm run build
```

## Run

```sh
npm run start
```

## Docker
```rm -rf node_modules package-lock.json```
```sudo docker build -t duycs/ai-services . --platform linux/amd64```

```sudo docker pull duycs/ai-services```

```sudo docker run --name ai-services  -p 8080:8080 duycs/ai-services```
```sudo docker run --name ai-services  -p 8080:8080 -d duycs/ai-services```
```sudo ufw allow 8080```