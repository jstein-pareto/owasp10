
export const topten = {
    title: 'OWASP Top Ten',
    subtitle: 'Application Security Risks',
    description:'The Ten Most Critical Web Application Security Risks',
    domain:'https://owasp.org',
    path:'www-project-top-ten',
    year: 2017,
    content: [
        {
            id:'A1', 
            title: 'Injection',
            description: 'exploit flaws in DB, OS, or LDAP config to execute foreign code',
            content: 'Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.',
            url:'https://owasp.org/www-project-top-ten/2017/A1_2017-Injection',
            path:'A1_2017-Injection',
        },
        {
            id:'A2', 
            title: 'Broken Authentication',
            description: 'exploit flaws in user or session config to execute foreign code',
            content: 'Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities temporarily or permanently.',
            url:'https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication',
            path:'A2_2017-Broken_Authentication',
        },
        {
            id:'A3', 
            title: 'Sensitive Data Exposure',
            description: 'exploit flaws in encryption to access proprietary data',
            content: 'Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.',
            url:'https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure',
            path:'A3_2017-Sensitive_Data_Exposure',
        },
        {
            id:'A4', 
            title: 'XML External Entities (XXE)',
            description: 'exploit flaws in XML processors to access proprietary data, execute foreign code, make DOS attack',
            content: 'Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.',
            url:'https://owasp.org/www-project-top-ten/2017/A4_2017-XML_External_Entities_(XXE)',
            path:'A4_2017-XML_External_Entities_(XXE)',
        },
        {
            id:'A5', 
            title: 'Broken Access Control',
            description: 'exploit user role config to access (and modify) proprietary data, execute foreign code',
            content: 'Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users\' accounts, view sensitive files, modify other users’ data, change access rights, etc.',
            url:'https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control',
            path:'A5_2017-Broken_Access_Control',
        },
        {
            id:'A6', 
            title: 'Security Misconfiguration',
            description: 'exploit security config to access proprietary data',
            content: 'Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. Not only must all operating systems, frameworks, libraries, and applications be securely configured, but they must be patched and upgraded in a timely fashion.',
            url:'https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control',
            path:'A5_2017-Broken_Access_Control',
        },
        {
            id:'A7', 
            title: 'Cross-Site Scripting (XSS)',
            description: 'exploit lack of security to...',
            content: 'XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.',            
            url:'https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control',
            path:'A5_2017-Broken_Access_Control',
        },
        {
            id:'A8', 
            title: 'Insecure Deserialization',
            description: 'exploit lack of security to...',
            content: 'Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks.',
            url:'https://owasp.org/www-project-top-ten/2017/A8_2017-Insecure_Deserialization',
            path:'A8_2017-Insecure_Deserialization',
        },
        {
            id:'A9', 
            title: 'Using Components with Known Vulnerabilities',
            description: 'exploit lack of security to...',
            content: 'Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.',
            url:'https://owasp.org/www-project-top-ten/2017/A9_2017-Using_Components_with_Known_Vulnerabilities',
            path:'A9_2017-Using_Components_with_Known_Vulnerabilities',
        },
        {
            id:'A10', 
            title: 'Insufficient Logging & Monitoring',
            description: 'exploit lack of security to...',
            content: 'Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.',
            url:'https://owasp.org/www-project-top-ten/2017/A10_2017-Insufficient_Logging%2526Monitoring',
            path:'A10_2017-Insufficient_Logging%2526Monitoring',
        },
    ],
}


export default topten