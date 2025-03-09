# for development
.PHONY: build-development
build-development:
	docker compose build

.PHONY: run-development
run-development:
	docker compose up -d

.PHONY: stop-development
stop-development:
	docker compose down

.PHONY: restart-development
restart-development:
	docker compose restart



MIGRATION_NAME ?=
ifeq ($(OS),Windows_NT)
    CHECK_MIGRATION_NAME = if not defined MIGRATION_NAME ( echo MIGRATION_NAME is required. Usage: make migrate MIGRATION_NAME=your_migration_name & exit /b 1 )
else
    CHECK_MIGRATION_NAME = if [ -z "$(MIGRATION_NAME)" ]; then echo "MIGRATION_NAME is required. Usage: make migrate MIGRATION_NAME=your_migration_name"; exit 1; fi
endif
.PHONY: migrate
migrate:
	@$(CHECK_MIGRATION_NAME)
	docker compose exec dotnet_webapi dotnet ef migrations add $(MIGRATION_NAME)
	$(MAKE) db-update

.PHONY: db-update
db-update:
	docker-compose exec dotnet_webapi dotnet ef database update

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
