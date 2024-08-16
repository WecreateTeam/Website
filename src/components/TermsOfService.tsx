import * as React from 'react';
import { CssBaseline, Box, Typography, Container } from '@mui/material';
import Footer from './Footer';
import RDHomeAppBar from './RDHomeAppBar';

export default function TermsOfService() {
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
            Terms and conditions
          </Typography>
          
          <Typography variant="body1" paragraph>
            This page, together with our Privacy Policy and General Website Terms & Conditions, tells you information about us and informs you of the legal terms and conditions (the "Terms") which govern your use of our ("Seller", "We", "Us", "Our") webstore (the "Webstore").
          </Typography>

          <Typography variant="body1" paragraph>
            These Terms will apply to any contract between you and the Us in respect of your purchase of video game related products, items and other content ("Products") on the Webstore (" Contract").
          </Typography>

          <Typography variant="body1" paragraph>
            Please read these Terms carefully and make sure that you understand them before ordering from the Webstore. Please note that before placing an order you will be asked to agree to these Terms. If you refuse to accept these Terms, you will not be able to place an order.
          </Typography>

          <Typography variant="body1" paragraph>
            You should print a copy of these Terms off or save them to your computer for future reference.
          </Typography>

          <Typography variant="body1" paragraph>
            We amend these Terms from time to time, as set out in Condition 11. Every time you wish to place an order, please check these Terms to ensure that you understand the terms which will apply at that time. These Terms were most recently updated on 12th June 2023.
          </Typography>

          <Typography variant="body1" paragraph>
            These Terms are only available in the English language.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Information about us
          </Typography>

          <Typography variant="body1" paragraph>
            We are a Licensed seller for goods for this game, game server or Discord server ("Platform"). We buy licenses for the use of digital goods and software from the Platform which we sell to end-customers. We are Tebex Limited t/a Tebex, a company registered in England and Wales with company number 08129184 and with our registered office at Tebex Limited, Levy Cohen & Co, 5.2 Central House, 1 Ballards Lane, London, United Kingdom, N3 1LQ. Our VAT numbers are GB167189962 & EU372035465.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Contacting us
          </Typography>

          <Typography variant="body1" paragraph>
            1. If you wish to contact us for technical support, you need to report fraudulent activity, or that a Platform is breaching our or a partner's AUP, you can contact us by visiting https://www.tebex.io/contact/checkout.
          </Typography>

          <Typography variant="body1" paragraph>
            2. If we have to contact you or give you notice in writing, we will do so by e-mail or by pre-paid post.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Use of the Webstore
          </Typography>

          <Typography variant="body1" paragraph>
            Your use of the Webstore is governed by our General Website Terms & Conditions. Please take the time to read this document, as it includes important terms which apply to you.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Our relationship with the Platform and how the Contract is formed between you and the Us
          </Typography>

          <Typography variant="body1" paragraph>
            Our Webstore will guide you through the steps you need to take to place an order with Us. When using Our order process you should check and amend any errors before submitting your orders to Us. Please take the time to read and check your order at each page of the order process.
          </Typography>

          <Typography variant="body1" paragraph>
            We license logos, graphics, logos, wordmarks and other assets for the purposes of advertising and selling non-tangible digital content produced by the Platform. We purchase licenses for the use of such software that provides in-game rewards and benefits from the Platform in question.
          </Typography>

          <Typography variant="body1" paragraph>
            The Platform sells us licenses for the use of such products that provide in-game benefits or rewards and we resell these as the merchant for these Products.
          </Typography>

          <Typography variant="body1" paragraph>
            As the Seller, We may negotiate and conclude the sale, or decline to conclude a sale for any reason we see fit, including but not limited to potential fraudulent activity or your previous interactions with Us.
          </Typography>

          <Typography variant="body1" paragraph>
            When you buy Products on the Webstore, you will be entering into a Contract with Us for this. No contract is formed between You and the Platform in this regard.
          </Typography>

          <Typography variant="body1" paragraph>
            All digital software and other digital items we provide are licensed, not sold. The license We Sell You grants you limited rights to consume and make use of the software and other digital items personally, and only against the account that was originally used to make the purchase. These rights to not give you permission to distribute, resell or share in any way the digital software and other digitals items we provide. To improve the readability of these terms, we may use terminology such as sell, purchase or buy. These should be interpreted in relation to the limited license we offer for the use of digital items or software.
          </Typography>

          <Typography variant="body1" paragraph>
            If you require support or have any questions or concerns relating to the Contract or the Products, you should contact Us. Please see Condition 2 which details the contact address that you can contact us on, and how we will contact you in the event that you have a question, concern or dispute.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Problems with the Products
          </Typography>

          <Typography variant="body1" paragraph>
            Your contract with Us means that we will make every reasonable effort to resolve any products or queries You may have. To contact us, please refer to Clause 4.6 above. If difficulties are encountered with the performance or non-performance of an ancillary service provided to You (for example, access to the server), that is related or required to use the Product We have sold, then we may refer you to specialised external support, however you should always contact us in the first instance.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            The Webstore and Products
          </Typography>

          <Typography variant="body1" paragraph>
            All title, ownership rights and intellectual property rights in the Webstore are owned by Us. All title, ownership rights and intellectual property rights in the Products are owned by the Platform and licenses to use the Products are sold to Us. We, the Platform and our licensors reserve all rights in national and international law to protect such rights in the event of any violation of these terms by you.
          </Typography>

          <Typography variant="body1" paragraph>
            We do not guarantee continuous, error-free, virus free or secure operation and access to the Webstore and its Products.
          </Typography>

          <Typography variant="body1" paragraph>
            Purchases from Us are payments for licenses to use the digital virtual items contained in the purchase. This transaction is final and there are no refunds. If you are banned for breaking the rules of the Platform, you will not be refunded this money. Bans are subject to the full discretion of the Platform, and their rules can be changed at any time. There is no guarantee on being able to access the Platform, and if the server is no longer operated the virtual items are forfeit. All items are virtual and have no value, and cannot be exchanged for real-world currency of any kind.
          </Typography>

          <Typography variant="body1" paragraph>
            Some purchases may include the issue of in-game tokens, credits or similar mechanisms of simulated value - "Virtual Currency". Any Virtual Currency awarded has no physical value, can only be redeemed on the Platform such Virtual Currency was awarded for, and cannot be exchanged for real-world currency of any kind. We may monitor all purchases, including but not limited to purchases that award Virtual Currency. Any unusual patterns of Virtual Currency use reported to or identified by us will be investigated, and such Virtual Currency may be forfeit at our discretion.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Restrictions on use of Webstore
          </Typography>

          <Typography variant="body1" paragraph>
            You shall not use the Webstore for any purpose other than to make personal, non-commercial purchases of Products, except as otherwise permitted by this Agreement. You shall not sell, rent, lease, license, grant a security interest in the Webstore to others without our prior written consent.
          </Typography>

          <Typography variant="body1" paragraph>
            You shall not in whole or in part, copy, reproduce, publish, distribute, translate, modify, create any derivative work from, disassemble, decompile, reverse engineer or otherwise attempt to discover the source code contained in or pertaining to the Webstore.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            How we use your personal information
          </Typography>

          <Typography variant="body1" paragraph>
            We only use your personal information in accordance with our Privacy Policy. Please take the time to read this document, as it includes important terms which apply to you.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Age restriction
          </Typography>

          <Typography variant="body1" paragraph>
            You may only purchase Products from the Webstore if you are at least 16 years old.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Order process
          </Typography>

          <Typography variant="body1" paragraph>
            All sales through the Webstore will be processed through our checkout platform located at https://checkout.tebex.io/. Payment methods, delivery times, taxes and fees will be detailed as part of the checkout process. Please take the time to read and check your order at each stage of the order process.
          </Typography>

          <Typography variant="body1" paragraph>
            All orders will be subject to these Terms in addition to any terms and conditions of the publisher of the relevant game and the terms of any ancillary service provided to You that is related or required to use the Product We have sold. In the case of a conflict between any of the said terms and conditions, these Terms will take priority.
          </Typography>

          <Typography variant="body1" paragraph>
            You should contact Us in the event that you have any queries or issues with your order or Our terms and conditions of sale.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Our right to vary these Terms
          </Typography>

          <Typography variant="body1" paragraph>
            We amend these Terms from time to time. Please look at the top of this page to see when these Terms were last updated.
          </Typography>

          <Typography variant="body1" paragraph>
            Every time you order Products using the Webstore, the Terms in force at the time of your order will apply.
          </Typography>

          <Typography variant="body1" paragraph>
            We may revise these Terms as they apply to your order from time to time to reflect any changes in relevant laws and regulatory requirements.
          </Typography>

          <Typography variant="body1" paragraph>
            If we have to revise these Terms as they apply to your order, we will contact you to give you reasonable advance notice of the changes and let you know how to cancel your order if you are not happy with the changes. You may cancel either in respect of all the affected Products or just the Products you have yet to receive.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Right of Withdrawal and Refund for European Union customers
          </Typography>

          <Typography variant="body1" paragraph>
            This Condition 12 only applies to European Union (" EU") customers.
          </Typography>

          <Typography variant="body1" paragraph>
            EU law provides you with a right of withdrawal on software sales (i.e. the agreement between you and Us). This can be excluded for digitally provided content once the content is provided to the end user. The EU statutory right of withdrawal ends 14 days after you purchase or (where you have provided the appropriate consent and acknowledgement) the moment you start downloading the content and services for the first time (whichever is sooner).
          </Typography>

          <Typography variant="body1" paragraph>
            We are obligated to inform you of your EU right of withdrawal in detail, which you can find in Schedule 1. If this Condition 12 should in any way differ from Schedule 1, the terms in Schedule 1 shall prevail.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Further Rights
          </Typography>

          <Typography variant="body1" paragraph>
            Because you are a consumer, We are under a legal duty to supply Products that are in conformity with the Contract. As a consumer, you have legal rights in relation to Products that are faulty, not as described or not provided with reasonable skill and care. These legal rights are not affected by your right of withdrawal referred to in Condition 12 and Schedule 1 or anything else in these Terms. Advice about your legal rights is available from your local Citizens' Advice Bureau or Trading Standards office.
          </Typography>

          {/* Add sections for Delivery, Price of Products, How to pay, Our liability, Affiliated brands, Third-Party Sites, and Other important terms */}

          <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
            Schedule 1 – Right of Withdrawal for EU Customers
          </Typography>

          <Typography variant="body1" paragraph>
            This Schedule only applies to EU customers.
          </Typography>

          <Typography variant="body1" paragraph>
            As a user of the Webstore domiciled in an EU member state, you have the right to withdraw from any purchase on the Webstore without giving any reason.
          </Typography>

          <Typography variant="body1" paragraph>
            For any digital content purchased online, you have agreed upon checkout that the withdrawal period will expire 14 days after you purchase such digital content or when you start downloading the content for the first time, whichever is sooner.
          </Typography>

          <Typography variant="body1" paragraph>
            To exercise the right of withdrawal, you must inform Us of your decision in writing by email to withdraw from the purchase by an unequivocal statement.
          </Typography>

          <Typography variant="body1" paragraph>
            To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.
          </Typography>

          <Typography variant="body1" paragraph>
            If you exercise your right of withdrawal, we shall reimburse to you all payments received from you without undue delay and in any event not later than 14 days from the day on which We are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.
          </Typography>

          <Typography variant="body1" paragraph>
            The statutory right of withdrawal is not applicable as regards the supply of digital content which is not supplied on a tangible medium if the performance has begun with your prior express consent and your acknowledgment that you thereby lose your right of withdrawal.
          </Typography>

        </Box>
      </Container>
      <Footer />
    </Box>
  );
}