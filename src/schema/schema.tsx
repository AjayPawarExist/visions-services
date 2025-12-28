export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://visions.services/#organization",
        "name": "visions.services",
        "alternateName": ["Visions Services", "Visions AI", "SHRI SIDDHAM INFOTECH PRIVATE LIMITED"],
        "url": "https://visions.services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://visions.services/visions-icon.png",
          "width": 512,
          "height": 512,
          "caption": "visions.services Logo"
        },
        "slogan": "See clearly. Act instantly. Automate effortlessly.",
        "description": "The operating system for customer intelligence. Unify streams and deploy AI agents that see the full picture.",
        "email": "support@visions.services",
        "telephone": "+919302525332",
        "knowsAbout": [
          "Artificial Intelligence",
          "Customer Support Automation",
          "Team Management",
          "Unified Communications",
          "WhatsApp Automation"
        ],
        "founder": {
          "@type": "Person",
          "name": "Ajay Pawar"
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": "SHRI SIDDHAM INFOTECH PRIVATE LIMITED"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919302525332",
          "contactType": "customer support",
          "email": "support@visions.services",
          "areaServed": "Global",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://visions.services/#website",
        "url": "https://visions.services",
        "name": "visions.services",
        "description": "Clarity + Intelligence + Automation",
        "publisher": {
          "@id": "https://visions.services/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://visions.services/#webpage",
        "url": "https://visions.services",
        "name": "visions.services - Clarity + Intelligence + Automation",
        "isPartOf": {
          "@id": "https://visions.services/#website"
        },
        "about": {
          "@id": "https://visions.services/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://visions.services/opengraph-image.png",
          "width": 1200,
          "height": 630
        },
        "description": "visions.services brings clarity to customer chaos. Unify your streams and deploy AI agents that see the full picture.",
        "breadcrumb": {
          "@id": "https://visions.services/#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://visions.services/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://visions.services"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://visions.services/#product",
        "name": "visions.services",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Customer Intelligence Platform",
        "operatingSystem": "Web",
        "description": "Unified inbox, AI support automation, and team management platform.",
        "url": "https://visions.services",
        "featureList": "Unified Inbox, AI Auto-Response, Team Collaboration Tools, Multi-channel Support",
        "screenshot": "https://visions.services/opengraph-image.png",
        "author": {
          "@id": "https://visions.services/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/PreOrder"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://visions.services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is visions.services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "visions.services is an intelligent customer communication OS that unifies conversations, automates support with AI, and provides clarity for your sales and support teams."
            }
          },
          {
            "@type": "Question",
            "name": "How does Visions AI support work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI learns from your products and services to provide instant, accurate responses to customer queries across channels like WhatsApp, Email, and Instagram, 24/7."
            }
          },
          {
            "@type": "Question",
            "name": "Which communication channels does visions.services support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We unify messages from WhatsApp, Email, SMS, Instagram Direct Messages, Facebook Messenger, and Webchat into a single, intelligent inbox."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use visions.services for team management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it includes robust team management features like smart chat assignment, internal notes, role-based permissions, and deep analytics to empower human agents."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}