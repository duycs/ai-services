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
```sh
rm -rf node_modules package-lock.json
```

```sh
docker build -t duycs/ai-services . --platform linux/amd64
```

```sh
docker push duycs/ai-services
```

```sh
sudo docker pull duycs/ai-services
```

```sh
sudo docker run --name ai-services  -p 8081:8080 duycs/ai-services
```

```sh
sudo docker run --name ai-services  -p 8081:8080 -d duycs/ai-services
```

```sh
sudo ufw allow 8081
```