# Housing Community System - Akshaya Tango

**Tagline/Short Description**: A comprehensive housing community management system designed for apartments, featuring payment management, complaint handling, monthly rent fee updates, and secure user authentication.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**Akshaya Tango** is a housing community management system designed specifically for apartment complexes. Built using Python Flask for the backend and HTML/CSS for the frontend, this system provides a secure and efficient way to manage apartment-related activities such as payments, complaints, and monthly rent fee updates.

- **Backend**: Python Flask
- **Frontend**: HTML, CSS
- **Database**: JSON (for simplicity and easy integration)
- **Core Features**: Secure login, complaint handling, payment management, automated rent updates using cronjobs

---

## Features

- **Admin Panel**: Allows administrators to manage tenant records, track payments, handle complaints, and update rent fees.
- **Tenant Payments**: Clients (tenants) can make rent payments directly through the platform.
- **Complaint Panel**: A dedicated panel for tenants to raise complaints, with admin oversight for resolution.
- **Monthly Rent Updates**: A cronjob runs monthly to automatically update the rent fees.
- **Security System**: Implements basic security measures to ensure user data is protected and transactions are secure.
- **User-Friendly Interface**: Built with a simple and responsive frontend for tenants and admins.

---

## Installation

### Prerequisites
To get the project up and running, you’ll need:

- Python 3.x installed
- Flask library
- Basic understanding of HTML/CSS for frontend
- JSON for the database (no additional software needed)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/AshokAdithya/Housing-Management-System-
   cd Housing-Management-System-
   ```
2. Install necessary modules and packages
   ```bash
   pip install -r requirements.txt
   ```

## Usage
  To run the project, use the following command:
  ```bash
  python main.py
  ```

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
