import * as React from 'react';
import { CssBaseline, Box, Typography, Container, Link } from '@mui/material';
import RDHomeAppBar from './RDHomeAppBar';
import Footer from './Footer';

export default function PrivacyPolicy() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <RDHomeAppBar />
      <Container maxWidth="md" sx={{ flexGrow: 1 }}>
        <Box sx={{ padding: 10, my: 4 }}>
        <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Tebex
            </Typography>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          
          <Typography variant="body1" paragraph>
            Tebex Limited respects your privacy and is committed to protecting your personal data. This privacy notice will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </Typography>

          <Typography variant="body1" paragraph>
            This privacy notice is provided in a layered format so you can click through to the specific areas set out below. Please also use the Glossary to understand the meaning of some of the terms used in this privacy notice.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Table of Contents
          </Typography>
          <ol>
            <li><Link href="#important-info">Important Information and Who We Are</Link></li>
            <li><Link href="#data-we-collect">The Data We Collect About You</Link></li>
            <li><Link href="#how-collected">How Is Your Personal Data Collected?</Link></li>
            <li><Link href="#how-we-use">How We Use Your Personal Data</Link></li>
            <li><Link href="#disclosures">Disclosures of Your Personal Data</Link></li>
            <li><Link href="#international-transfers">International Transfers</Link></li>
            <li><Link href="#data-security">Data Security</Link></li>
            <li><Link href="#data-retention">Data Retention</Link></li>
            <li><Link href="#your-rights">Your Legal Rights</Link></li>
            <li><Link href="#glossary">Glossary</Link></li>
          </ol>
          <Typography variant="h5" id="important-info" gutterBottom>
            1. Important Information and Who We Are
          </Typography>
          
          <Typography variant="body1" paragraph>
            This privacy notice aims to give you information on how Tebex Limited collect and process your personal data through your use of www.tebex.io and www.buycraft.net (together referred to as "this website"), and also any associated webstore (a "Webstore") which utilities the Tebex webstore platform for game servers (the "Tebex Platform"), including any data you may provide through this website when you purchase a product or service.
          </Typography>

          <Typography variant="body1" paragraph>
            This website is not intended for children and we do not knowingly collect data relating to children.
          </Typography>

          <Typography variant="body1" paragraph>
            It is important that you read this privacy notice together with any other privacy notice or fair processing notice we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data. This privacy notice supplements the other notices and is not intended to override them.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Controller
          </Typography>

          <Typography variant="body1" paragraph>
            Tebex Limited is the controller and responsible for your personal data (collectively referred to as "Tebex", "we", "us" or "our" in this privacy notice).
          </Typography>

          <Typography variant="body1" paragraph>
            We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy notice. If you have any questions about this privacy notice, including any requests to exercise your legal rights, please contact the data privacy manager using the details set out below.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact details
          </Typography>

          <Typography variant="body1" paragraph>
            Our full details are:
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li>Full name of legal entity: Tebex Limited</li>
              <li>Name or title of data privacy manager: Data Privacy Manager</li>
              <li>Email address: privacy@tebex.io</li>
              <li>Postal address: Tebex Limited, Levy Cohen & Co, 5.2 Central House, 1 Ballards Lane, London, United Kingdom, N3 1LQ</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Changes to the privacy notice and your duty to inform us of changes
          </Typography>

          <Typography variant="body1" paragraph>
            This version was last updated on 12 June 2023 and historic versions can be obtained by contacting us.
          </Typography>

          <Typography variant="body1" paragraph>
            It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Third-party links
          </Typography>

          <Typography variant="body1" paragraph>
            This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.
          </Typography>

          <Typography variant="h5" id="data-we-collect" gutterBottom>
            2. The Data We Collect About You
          </Typography>

          <Typography variant="body1" paragraph>
            Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
          </Typography>

          <Typography variant="body1" paragraph>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
          We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as this data does not directly or indirectly reveal your identity. For example, we may aggregate your             Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy notice.
          </Typography>

          <Typography variant="body1" paragraph>
            We do not collect any <strong>Special Categories of Personal Data</strong> about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
          </Typography>

          <Typography variant="h6" gutterBottom>
            If you fail to provide personal data
          </Typography>

          <Typography variant="body1" paragraph>
            Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.
          </Typography>

          <Typography variant="h5" id="how-collected" gutterBottom>
            3. How Is Your Personal Data Collected?
          </Typography>

          <Typography variant="body1" paragraph>
            We use different methods to collect data from and about you including through:
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li><strong>Direct interactions.</strong> You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
                <ul>
                  <li>apply for our products or services;</li>
                  <li>create an account on our website;</li>
                  <li>subscribe to our service or publications;</li>
                  <li>request marketing to be sent to you;</li>
                  <li>enter a competition, promotion or survey; or</li>
                  <li>give us some feedback.</li>
                </ul>
              </li>
              <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies.</li>
              <li><strong>Third parties or publicly available sources.</strong> We may receive personal data about you from various third parties and public sources as set out below:
                <ul>
                  <li>Technical Data from analytics providers such as Google based outside the EU;</li>
                  <li>Contact, Financial and Transaction Data from providers of technical, payment and delivery services based inside OR outside the EU;</li>
                  <li>Identity and Contact Data from publicly availably sources such as Companies House and the Electoral Register based inside the EU.</li>
                </ul>
              </li>
            </ul>
          </Typography>
          <Typography variant="h5" id="how-we-use" gutterBottom>
            4. How We Use Your Personal Data
          </Typography>

          <Typography variant="body1" paragraph>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </Typography>

          <Typography variant="body1" paragraph>
            Generally we do not rely on consent as a legal basis for processing your personal data other than in relation to sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Purposes for which we will use your personal data
          </Typography>

          <Typography variant="body1" paragraph>
            We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
          </Typography>

          <Typography variant="body1" paragraph>
            Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.
          </Typography>

          {/* Add table here */}

          <Typography variant="h6" gutterBottom>
            Marketing
          </Typography>

          <Typography variant="body1" paragraph>
            We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Promotional offers from us
          </Typography>

          <Typography variant="body1" paragraph>
            We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing).
          </Typography>

          <Typography variant="body1" paragraph>
            You will receive marketing communications from us if you have requested information from us or purchased goods or services from us or if you provided us with your details when you entered a competition or registered for a promotion and, in each case, you have not opted out of receiving that marketing.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Third-party marketing
          </Typography>

          <Typography variant="body1" paragraph>
            We will get your express opt-in consent before we share your personal data with any company outside the Tebex group of companies for marketing purposes.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Opting out
          </Typography>

          <Typography variant="body1" paragraph>
            You can ask us or third parties to stop sending you marketing messages at any time by logging into the website and checking or unchecking relevant boxes to adjust your marketing preferences or by following the opt-out links on any marketing message sent to you or by contacting us at any time.
          </Typography>

          <Typography variant="body1" paragraph>
            Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of a product/service purchase, warranty registration, product/service experience or other transactions.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Cookies
          </Typography>

          <Typography variant="body1" paragraph>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see our cookie policy.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Change of purpose
          </Typography>

          <Typography variant="body1" paragraph>
            We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.
          </Typography>

          <Typography variant="body1" paragraph>
            If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.
          </Typography>

          <Typography variant="body1" paragraph>
            Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
          </Typography>

          <Typography variant="h5" id="disclosures" gutterBottom>
            5. Disclosures of Your Personal Data
          </Typography>

          <Typography variant="body1" paragraph>
            We may have to share your personal data with the parties set out below for the purposes set out in the table in paragraph 4 above.
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li>Internal Third Parties as set out in the Glossary.</li>
              <li>External Third Parties as set out in the Glossary.</li>
              <li>Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy notice.</li>
            </ul>
          </Typography>

          <Typography variant="body1" paragraph>
            We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
          </Typography>
          <Typography variant="h5" id="international-transfers" gutterBottom>
            6. International Transfers
          </Typography>

          <Typography variant="body1" paragraph>
            We share your personal data within the Tebex Group. This will involve transferring your data outside the European Economic Area (EEA).
          </Typography>

          <Typography variant="body1" paragraph>
            Many of our external third parties are based outside the European Economic Area (EEA) so their processing of your personal data will involve a transfer of data outside the EEA.
          </Typography>

          <Typography variant="body1" paragraph>
            Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission.</li>
              <li>Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe.</li>
              <li>Where we use providers based in the US, we may transfer data to them if they are part of the Privacy Shield which requires them to provide similar protection to personal data shared between the Europe and the US.</li>
            </ul>
          </Typography>

          <Typography variant="body1" paragraph>
            Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the EEA.
          </Typography>

          <Typography variant="h5" id="data-security" gutterBottom>
            7. Data Security
          </Typography>

          <Typography variant="body1" paragraph>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
          </Typography>

          <Typography variant="body1" paragraph>
            We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
          </Typography>

          <Typography variant="h5" id="data-retention" gutterBottom>
            8. Data Retention
          </Typography>

          <Typography variant="h6" gutterBottom>
            How long will you use my personal data for?
          </Typography>

          <Typography variant="body1" paragraph>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </Typography>

          <Typography variant="body1" paragraph>
            To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
          </Typography>

          <Typography variant="body1" paragraph>
            By law we have to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they cease being customers for tax purposes.
          </Typography>

          <Typography variant="body1" paragraph>
            In some circumstances you can ask us to delete your data: see Request erasure below for further information.
          </Typography>

          <Typography variant="body1" paragraph>
            In some circumstances we may anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes in which case we may use this information indefinitely without further notice to you.
          </Typography>
          <Typography variant="h5" id="your-rights" gutterBottom>
            9. Your Legal Rights
          </Typography>

          <Typography variant="body1" paragraph>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data. Please click on the links below to find out more about these rights:
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li><Link href="#request-access">Request access to your personal data</Link></li>
              <li><Link href="#request-correction">Request correction of your personal data</Link></li>
              <li><Link href="#request-erasure">Request erasure of your personal data</Link></li>
              <li><Link href="#object-processing">Object to processing of your personal data</Link></li>
              <li><Link href="#request-restriction">Request restriction of processing your personal data</Link></li>
              <li><Link href="#request-transfer">Request transfer of your personal data</Link></li>
              <li><Link href="#right-withdraw">Right to withdraw consent</Link></li>
            </ul>
          </Typography>

          <Typography variant="body1" paragraph>
            If you wish to exercise any of the rights set out above, please contact us.
          </Typography>

          <Typography variant="h6" gutterBottom>
            No fee usually required
          </Typography>

          <Typography variant="body1" paragraph>
            You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we may refuse to comply with your request in these circumstances.
          </Typography>

          <Typography variant="h6" gutterBottom>
            What we may need from you
          </Typography>

          <Typography variant="body1" paragraph>
            We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Time limit to respond
          </Typography>

          <Typography variant="body1" paragraph>
            We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
          </Typography>

          <Typography variant="h5" id="glossary" gutterBottom>
            10. Glossary
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            LAWFUL BASIS
          </Typography>

          <Typography variant="body1" paragraph>
            Legitimate Interest means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us.
          </Typography>

          <Typography variant="body1" paragraph>
            Performance of Contract means processing your data where it is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.
          </Typography>

          <Typography variant="body1" paragraph>
            Comply with a legal or regulatory obligation means processing your personal data where it is necessary for compliance with a legal or regulatory obligation that we are subject to.
          </Typography>
          <Typography variant="h6" gutterBottom>
            THIRD PARTIES
          </Typography>

          <Typography variant="body1" paragraph>
            Internal Third Parties
          </Typography>

          <Typography variant="body1" paragraph>
            Other companies in the Tebex Group acting as joint controllers or processors and who are based in the United Kingdom and provide IT and system administration services and undertake leadership reporting.
          </Typography>

          <Typography variant="body1" paragraph>
            External Third Parties
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li>Service providers acting as processors based in the United Kingdom who provide IT and system administration services.</li>
              <li>Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers based in the United Kingdom who provide consultancy, banking, legal, insurance and accounting services.</li>
              <li>HM Revenue & Customs, regulators and other authorities acting as processors or joint controllers based in the United Kingdom who require reporting of processing activities in certain circumstances.</li>
            </ul>
          </Typography>

          <Typography variant="h6" gutterBottom>
            YOUR LEGAL RIGHTS
          </Typography>

          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>

          <Typography variant="body1" component="div">
            <ul>
              <li id="request-access"><strong>Request access</strong> to your personal data (commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</li>
              <li id="request-correction"><strong>Request correction</strong> of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</li>
              <li id="request-erasure"><strong>Request erasure</strong> of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</li>
              <li id="object-processing"><strong>Object to processing</strong> of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have                 compelling legitimate grounds to process your information which override your rights and freedoms.</li>
              <li id="request-restriction"><strong>Request restriction of processing</strong> of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios: (a) if you want us to establish the data's accuracy; (b) where our use of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
              <li id="request-transfer"><strong>Request the transfer</strong> of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</li>
              <li id="right-withdraw"><strong>Withdraw consent at any time</strong> where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</li>
            </ul>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}