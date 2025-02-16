# for development
.PHONY: build-backend-development
build-backend-development:
	docker compose build

.PHONY: run-backend-development
run-backend-development:
	docker compose up -d

# for production
.PHONY: build-backend-production
build-backend-production:
	docker build ./backend -t backend

.PHONY: run-backend-production
run-backend-production:
	docker compose up -d