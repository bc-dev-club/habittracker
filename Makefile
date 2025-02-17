# for development
.PHONY: build-development
build-development:
	docker compose build

.PHONY: run-development
run-development:
	docker compose up -d

# for production
.PHONY: build-backend-production
build-backend-production:
	docker build ./backend -t dotnet_webapi

.PHONY: run-backend-production
run-backend-production:
	docker run -d -p 8000:8000 dotnet_webapi

.PHONY: build-frontend-production
build-frontend-production:
	docker build ./frontend -t react_frontend

.PHONY: run-frontend-production
run-frontend-production:
	docker run -p 80:80 -d react_frontend
