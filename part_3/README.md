## Turning a single consumer web-based Platforms into a SaaS

A web-based gaming platform (=gPlatform) is currently providing it’s services to one single gaming site (=gSite).
The services provided by gPlatform to gSite include hosting web-games and backoffice for managing players that sign-up and play on gSite.

We want to make gPlatform into a SaaS that can be sold to other gaming sites as subscription-based service.

Each new gaming company operating a gaming site, will have it’s own dedicated domain - for example:
Company A will have a domain cool-games.com
Company B will have a domain luck-games.co.uk
etc

Currently at gPlatform, users are identified by using email as a unique key.

## Give a short, clear explanation for every question below:

1. How can we design the system in a way that every Company will be able to serve games on their gaming site from their domain?

```
It can be done by adding a list of domains related to a Company and a middleware that will find Company by domain. When there is request arriving to some domain - it finds related Company and adds its ID to context, so then it can work with the resources that belong to the Company.
```

2. What modification should be done to the users table at gPlatform to support this change?

```
- Every user will need additional field for saving company ID, ex. "companyId" or "tenantId".
- "email" field should not be unique, but another unique key is needed, like "COMPANY_ID:EMAIL". So single user is able to register in different companies with the same email.

In some cases it might be reasonable to use separate database for each of the Companies. Then users table doesn't need any changes.
```

3. Considering we have 1 backend cluster that serves all companies, how can we validate a user login on one gaming domain in such a way that it does not give access to a different gaming domain? (i.e. authenticating on site A, grants access to site A only)

```
A middleware can find related Company by domain. Each user record also has Company ID saved. This Company ID should be used to filter resources that belong to the Company.

In case of specific database for each Company it will work only with that database for this user, so no additional changes are needed.
```
