# RENTAL SERVICE APPLICATION

```mermaid
flowchart TD;
  subgraph "Rental Service"

    subgraph "DB"
     A[(DataBase)]
     style A fill:green
    end

    subgraph "Backend"
     B{{Backend}}
     style B fill:#FF0
    end

    subgraph "Frontend"
     C{{Frontend}}
     style C fill:purple
    end

    DB --> Backend --> DB
    Frontend -.->Backend -.-> Frontend

    subgraph "Step 1"
     D((Backend))
     style D fill:red

     subgraph "Step 1.1"
     D1(Register User Management)
     style D1 fill:red
     end

     subgraph "Step 1.2"
     D2(Property Management)
     style D2 fill:yellow
     end
    end

  end

```

```mermaid
   sequenceDiagram
    participant App
    participant Axios
    participant API

    App->>+Axios: Send GET request
    Axios->>+API: Send GET request
    API-->>-Axios: Return data
    Axios-->>-App: Return data to App
```

## Step1 Server Side

### User Management

- register
- validation with express validator
- Validate User email
- login
  #### Authentication & Authorization
  -isAdmin
  -isLoggedIn

## Step 2 CLIENT SIDE

- Basic setup √
- navbar √
- routing

## ADMIN DASHBOARD

- Basic app setup √
- set up pages √
- protect routing √
- make navbar √
- make a sidebar √
- use Redux to fetch products √
- render property card with api data
- create a property

\_----------TODO------
backend create property
frontend create property
