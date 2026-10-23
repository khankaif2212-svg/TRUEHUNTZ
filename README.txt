TRUEHURTZ INVESTIGATORS WEBSITE — START HERE
================================================

WHAT IS INCLUDED
- index.html       Main responsive website
- style.css        Theme, layout, mobile styles and animations
- script.js        Mobile navigation, scroll effects, FAQ, form validation and submission
- privacy.html     Privacy policy template
- terms.html       Terms and conditions template
- favicon.svg      Gold TH icon
- README.txt       This guide

IMPORTANT BEFORE PUBLISHING
1. The site uses the supplied contact details. Confirm every phone number, address and business-hour detail is correct.
2. The form is NOT connected until you replace YOUR_FORMSPREE_ID in index.html with your actual Formspree form ID.
3. Testimonials are intentionally not fabricated. The site explains that client identities/testimonials are not published without permission.
4. The experience/case-count statistics are not invented. The About section uses commitment/process indicators instead of fake business performance numbers.
5. The legal pages are templates, not legal advice. Review them against your real business practices and applicable Indian law.
6. Replace the generic social links with the agency's real profiles.
7. Replace the Unsplash background image URLs if you own/obtain preferred licensed imagery. The URLs are external and may change.

HOW TO USE THE ZIP (BEGINNER FRIENDLY)
--------------------------------------
On Windows:
1. Download TrueHurtz_Investigators_Website.zip to your computer.
2. Open File Explorer and go to Downloads.
3. Right-click the ZIP file and choose "Extract All..."
4. Click "Extract". Windows will create a normal folder.
5. Open the extracted folder. Keep all files together in the same folder.
6. Double-click index.html to preview it in Chrome or Edge.
   Note: a local preview is enough for layout testing, but form submission needs the site hosted online and Formspree configured.
7. Do not open index.html from inside the ZIP without extracting first.

EDITING THE WEBSITE
-------------------
Easy method:
- Install Visual Studio Code from https://code.visualstudio.com/
- In VS Code, choose File > Open Folder and select the extracted TrueHurtz_Investigators_Website folder.
- Click index.html, style.css, script.js, privacy.html or terms.html in the left sidebar.
- Save changes with Ctrl+S, then refresh the browser.

Change text:
- Open index.html and search (Ctrl+F) for the exact heading or sentence.
- Edit only the text between the HTML tags. Keep the tags and quotation marks intact.

Change phone numbers:
- In index.html, search for 7777067782 and 7400180884.
- Update all occurrences, including tel: links and the WhatsApp URL.
- WhatsApp uses the international number with country code 91 and no plus sign: https://wa.me/91XXXXXXXXXX
- Also update both legal pages.

Change email/address/hours:
- Use Ctrl+F in index.html, privacy.html and terms.html to find the old text and replace it.
- Update the JSON-LD business details near the top of index.html as well.

Change colours:
- Open style.css and edit the CSS variables at the top under :root.
- --black controls the main black; --gold and --gold-light control gold accents.
- Save and refresh.

Change images:
- Open style.css and search for "images.unsplash.com".
- Replace the URL inside url("...") with the direct URL of an image you are permitted to use.
- The hero image is the first matching URL; the About image is another.
- For a local image, create an images folder, put the image inside it, and use url("images/your-image.jpg").
- Use images you own or have permission to use. Compress images to help loading speed.

SET UP A REAL CONTACT FORM WITH FORMSPREE
-----------------------------------------
1. Go to https://formspree.io/ and create an account.
2. Create a new form and set the destination/recipient to truehurtz27@gmail.com.
3. Verify the email address if Formspree asks you to.
4. Copy the form endpoint / form ID from Formspree. It typically looks like https://formspree.io/f/abcdefgh.
5. Open index.html in VS Code.
6. Find this line:
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" novalidate>
7. Replace YOUR_FORMSPREE_ID with the real ID only. Example format (not a real ID):
   action="https://formspree.io/f/abcdefgh"
8. Save the file and upload/redeploy the website.
9. Test the form from the hosted website with your own details. Confirm the email arrives and check spam/junk.
10. Formspree's plan limits and email-verification steps can change; follow the current instructions shown in your account.

If the form is not configured, the website will show a clear message and the phone/WhatsApp contact links will still work. Never publish a fake endpoint expecting emails to arrive.

OPTIONAL WHATSAPP ENQUIRY
-------------------------
The floating WhatsApp button and hero button already open WhatsApp to Sameer's supplied number with a prefilled greeting. A website form submission does not automatically open WhatsApp; to avoid sending personal details without a user's clear action, the form does not silently redirect form contents to WhatsApp.

RUN LOCALLY
-----------
You can double-click index.html. For a more reliable local preview, install VS Code and the "Live Server" extension:
1. Open the folder in VS Code.
2. Open Extensions (four-square icon) and search for "Live Server".
3. Install it, right-click index.html and select "Open with Live Server".
4. Browser opens a local preview. The Formspree form works only after the endpoint is configured and the site is online.

HOST FREE ON NETLIFY
--------------------
1. Extract the ZIP.
2. Go to https://www.netlify.com/ and create/sign in to an account.
3. In the Netlify dashboard, use Add new site / Deploy manually (wording can change).
4. Drag the extracted website folder's FILES (not the ZIP itself, and not an extra parent folder) into the deployment drop zone if offered.
5. Wait for deployment. Netlify gives you a temporary address ending in netlify.app.
6. Open that address and test navigation, phone links, map, and form.
7. If you change files later, redeploy the updated site folder.

HOST ON GITHUB PAGES
--------------------
1. Create/sign in at https://github.com/.
2. Create a new repository, for example truehurtz-website.
3. Upload the website files into the repository root. Ensure index.html is at the root, not inside another nested folder.
4. In repository Settings > Pages, choose deployment from the main branch and root folder, then save.
5. Wait for GitHub to publish the Pages URL and test it.
6. GitHub Pages is static hosting; the Formspree endpoint is what sends form submissions.

CONNECT A CUSTOM DOMAIN (e.g. truehurtz.in)
--------------------------------------------
1. Buy/register the domain from a registrar of your choice. Availability and prices vary.
2. In Netlify or GitHub Pages, open the site's domain/custom-domain settings and add truehurtz.in (and optionally www.truehurtz.in).
3. The host will show the exact DNS records to add. Follow those values exactly; do not guess DNS values.
4. Open your domain registrar's DNS settings and add the records supplied by your host.
5. Wait for DNS propagation and enable HTTPS/SSL in the host dashboard when available.
6. Set the preferred primary domain and test both www and non-www versions.
7. Update the og:url and JSON-LD url in index.html to the final live domain if needed.
8. Never share registrar passwords or verification codes with anyone.

FINAL PRE-LAUNCH CHECKLIST
--------------------------
[ ] Confirm business details and phone numbers.
[ ] Replace social profile placeholders with actual profile URLs.
[ ] Configure and test Formspree.
[ ] Review Privacy Policy and Terms with a qualified professional.
[ ] Confirm the image licence/usage rights.
[ ] Test the site on mobile and desktop.
[ ] Test all phone, email, WhatsApp, privacy and terms links.
[ ] Test the form on the live domain and confirm the message is delivered.
[ ] Add the actual logo when ready.
[ ] Confirm the domain and HTTPS certificate are active.
