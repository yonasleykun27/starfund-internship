# StarFund Database Entity Relationship Diagram (ERD)

This diagram details the relational structures, columns, and foreign key references between the 7 database tables implemented in [database_setup.sql](file:///c:/Users/Yonas/Desktop/starfund-internship/week7/database_setup.sql).

```mermaid
erDiagram
    users ||--o{ startups : "founders create"
    users ||--o{ investments : "investors fund"
    users ||--o{ follows : "users follow"
    startups ||--o{ campaigns : "launches"
    startups ||--o{ updates : "has updates"
    startups ||--o{ follows : "followed by"
    campaigns ||--o{ investments : "backed by"
    investments ||--|| transactions : "generates"

    users {
        VARCHAR_50 id PK
        VARCHAR_100 name
        VARCHAR_100 email UK
        VARCHAR_255 password
        VARCHAR_20 role
        TIMESTAMP created_at
    }

    startups {
        VARCHAR_50 id PK
        VARCHAR_100 title
        TEXT description
        VARCHAR_50 sector
        VARCHAR_255 cover_image
        INT team_size
        VARCHAR_50 founder_id FK
        VARCHAR_20 status
        TIMESTAMP created_at
    }

    campaigns {
        VARCHAR_50 id PK
        VARCHAR_50 startup_id FK
        NUMERIC goal_amount
        NUMERIC raised_amount
        TIMESTAMP start_date
        TIMESTAMP end_date
        VARCHAR_20 status
        TIMESTAMP created_at
    }

    investments {
        VARCHAR_50 id PK
        VARCHAR_50 campaign_id FK
        VARCHAR_50 investor_id FK
        NUMERIC amount
        TIMESTAMP created_at
    }

    updates {
        VARCHAR_50 id PK
        VARCHAR_50 startup_id FK
        VARCHAR_150 title
        TEXT content
        TIMESTAMP created_at
    }

    follows {
        VARCHAR_50 id PK
        VARCHAR_50 user_id FK
        VARCHAR_50 startup_id FK
        TIMESTAMP created_at
    }

    transactions {
        VARCHAR_50 id PK
        VARCHAR_50 investment_id FK
        VARCHAR_20 status
        VARCHAR_50 payment_method
        TIMESTAMP created_at
    }
```
