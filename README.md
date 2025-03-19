# DataLouna App

## Overview
DataLouna is a web application that provides two APIs for fetching minimum prices of items and processing purchases. 

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Installation

1. **Clone the Repository**

```bash
git clone <repository-url>
cd DataLouna


3. **Run Docker Compose**

```bash
docker-compose up --build


4. **Run the Application**

```bash
npm run dev



## API Endpoints

### 1. Get Minimum Prices
- **Endpoint:** `/api/min-prices`
- **Method:** GET
- **Description:** Fetches the minimum prices of items.

### 2. Purchase an Item
- **Endpoint:** `/api/purchase`
- **Method:** POST
- **Request Body:**
```json
{
"userId": "number",
"productId": "number"
}

- **Description:** Processes a purchase for a specified user and product.

## Database Initialization
By default, the application creates one user and three products in the database upon initialization.
