TRIMAHI.HOMES WEBSITE - HOW TO PUT IT LIVE (Rs 0)
=================================================

A. UPLOAD TO GITHUB
1. Log in to github.com
2. Click "+" (top right) > New repository
3. Name: trimahi-website  |  Public  |  Create repository
4. Click "uploading an existing file"
5. Drag in EVERYTHING from this folder (including the "blog" folder)
6. Click "Commit changes"

B. GO LIVE ON CLOUDFLARE PAGES
1. Log in to dash.cloudflare.com
2. Workers & Pages > Create > Pages > Connect to Git
3. Connect GitHub and choose "trimahi-website"
4. Framework preset: None | Build command: (leave empty) | Output directory: /
5. Save and Deploy  ->  site is live at trimahi-website.pages.dev

C. CONNECT TRIMAHI.HOMES (domain on GoDaddy)
1. Cloudflare > Add a domain > trimahi.homes > Free plan
2. Copy the 2 nameservers Cloudflare shows
3. GoDaddy > My Products > trimahi.homes > DNS > Nameservers > Change
   > "I'll use my own nameservers" > paste both > Save
4. Wait 1-24 hours (Cloudflare emails you when active)
5. Cloudflare > Workers & Pages > trimahi-website > Custom domains
   > add trimahi.homes  and  www.trimahi.homes
   (SSL / https turns on automatically)

D. GOOGLE SEARCH CONSOLE
1. search.google.com/search-console > Add property > Domain > trimahi.homes
2. Verify (Cloudflare can add the record automatically)
3. Sitemaps > enter sitemap.xml > Submit

E. ADDING A NEW BLOG POST LATER
1. Get the new post file from Claude (example: blog/new-post.html)
   plus the updated blog/index.html and sitemap.xml
2. GitHub > trimahi-website > open "blog" folder > Add file > Upload files
3. Upload the files > Commit changes
4. Live in about 1 minute. Nothing else to do.

F. ADDING PROJECT PHOTOS LATER
Send Claude the photos and project details; you will get updated pages to upload
the same way.

G. FREE BUSINESS EMAIL: hello@trimahi.homes (do this after step C)
The site shows hello@trimahi.homes. Make it work for free:
1. Cloudflare > trimahi.homes > Email > Email Routing > Get started
2. Custom address: hello  ->  Destination: your Gmail address
3. Click the verification link Cloudflare sends to your Gmail
4. Done. Mail to hello@trimahi.homes now arrives in Gmail.

H. PAYMENT GATEWAY (Razorpay or Cashfree - free to sign up, fee per sale only)
Pages the gateway checks are all on the site:
  Contact  /contact      Terms     /terms       Privacy  /privacy
  Refund   /refund       Shipping  /shipping    Pricing  /shop   About /about
1. Sign up at razorpay.com (or cashfree.com) as a Proprietorship with your
   PAN, GST, bank account and website https://trimahi.homes
2. Once activated: Payment Pages > Create > one page per product
   (name, price, ask buyer for email + phone)
3. Copy each payment page link and send it to Claude. Claude will put the
   links on the "Buy now" buttons in shop.html.
Until then, "Buy now" opens WhatsApp so you can take orders and UPI payments.

IMPORTANT before applying:
- Have every product on the Shop page actually ready to deliver.
- Read Terms, Privacy and Refund pages once and change anything that does
  not match how you work. They are templates, not legal advice.
