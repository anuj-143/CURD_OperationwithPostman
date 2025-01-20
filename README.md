# CRUD Operations with Postman

This README provides instructions and details about using a CRUD API with Postman for testing and validating the operations.

---

## Prerequisites

1. **Postman**: Download and install Postman from [Postman's official website](https://www.postman.com/).
2. **API Endpoint**: Ensure you have access to the API base URL and necessary endpoints.
3. **API Documentation** (if available): Reference for endpoints, request payloads, and responses.

---

## CRUD Operations

The API supports the following operations:

1. **Create**: Add a new resource to the database.
2. **Read**: Fetch existing resources.
3. **Update**: Modify an existing resource.
4. **Delete**: Remove a resource.

Below is an overview of how to test each operation using Postman.

---

### 1. Create (POST Request)

**Endpoint**: `/api/resource`

**Description**:
Add a new item to the resource collection.

**Steps**:
1. Open Postman.
2. Select **POST** method.
3. Enter the API endpoint URL (e.g., `http://example.com/api/resource`).
4. Go to the **Body** tab, choose **raw**, and select `JSON` format.
5. Enter the payload in JSON format, e.g.:
   ```json
   {
     "name": "Example Item",
     "description": "A sample resource.",
     "price": 99.99
   }
   ```
6. Click **Send**.

**Expected Response**:
- **Status Code**: `201 Created`
- **Body**: Contains the details of the newly created resource.

---

### 2. Read (GET Request)

**Endpoint**: `/api/resource` or `/api/resource/:id`

**Description**: Fetch all resources or a specific resource by ID.

**Steps**:
1. Open Postman.
2. Select **GET** method.
3. Enter the API endpoint URL:
   - To fetch all resources: `http://example.com/api/resource`
   - To fetch a specific resource: `http://example.com/api/resource/1`
4. Click **Send**.

**Expected Response**:
- **Status Code**: `200 OK`
- **Body**: JSON array or object with resource details.

---

### 3. Update (PUT Request)

**Endpoint**: `/api/resource/:id`

**Description**: Update an existing resource by its ID.

**Steps**:
1. Open Postman.
2. Select **PUT** method.
3. Enter the API endpoint URL (e.g., `http://example.com/api/resource/1`).
4. Go to the **Body** tab, choose **raw**, and select `JSON` format.
5. Enter the updated payload, e.g.:
   ```json
   {
     "name": "Updated Item",
     "description": "Updated description.",
     "price": 79.99
   }
   ```
6. Click **Send**.

**Expected Response**:
- **Status Code**: `200 OK`
- **Body**: Contains updated resource details.

---

### 4. Delete (DELETE Request)

**Endpoint**: `/api/resource/:id`

**Description**: Remove a resource by its ID.

**Steps**:
1. Open Postman.
2. Select **DELETE** method.
3. Enter the API endpoint URL (e.g., `http://example.com/api/resource/1`).
4. Click **Send**.

**Expected Response**:
- **Status Code**: `204 No Content` or `200 OK`
- **Body**: Empty or confirmation message.



