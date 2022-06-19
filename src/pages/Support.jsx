import {
  Box,
  CircularProgress,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CharityCard from "../components/CharityCard";
import Navbar from "../components/Navbar";
import CharityBg from "../assets/charity.jpg";
import { fetchCharities } from "../api/third-party";

const charityData = {
  projects: {
    hasNext: true,
    nextProjectId: 36061,
    project: [
      {
        id: 4741,
        organization: {
          id: 4427,
          name: "St Gregory's Foundation",
          addressLine1: "4 Bushy Court",
          addressLine2: "20 Upper  Teddington Rd",
          city: "Hampton Wick",
          state: "Surrey",
          postal: "KT1 4DU",
          iso3166CountryCode: "GB",
          url: "http://www.stgregorysfoundation.org.uk/",
          logoUrl: "https://www.globalgiving.org/pfil/organ/4427/orglogo.jpg",
          mission:
            "St Gregory's Foundation works in the former Soviet Union to tackle the social problems facing children, teenagers, parents and carers.  Our projects address the root causes of disadvantage by putting families before institutions, strengthening a sense of responsibility in young and old alike and providing opportunities for vulnerable people to fulfill their potential.  Our work makes our beneficiaries active participants in improving their own lives and encourages a more charitable society.",
          totalProjects: 10,
          activeProjects: 6,
          themes: {
            theme: [
              {
                id: "children",
                name: "Child Protection",
              },
              {
                id: "edu",
                name: "Education",
              },
              {
                id: "health",
                name: "Physical Health",
              },
              {
                id: "hunger",
                name: "Food Security",
              },
              {
                id: "disability",
                name: "Disability Rights",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "Georgia",
                iso3166CountryCode: "GE",
              },
              {
                name: "Russia",
                iso3166CountryCode: "RU",
              },
            ],
          },
          country: "United Kingdom",
        },
        active: true,
        title: "Prepare 100 Russian Orphans for Adult Life",
        summary:
          "Teenagers in St Petersburg orphanages and recent orphanage-leavers  are supported by psychologists and volunteer families to help them make the difficult transition to adult life.  Group activities and individual therapy helps them overcome childhood traumas and prepare themselves for living independently, finding and keeping a job, and forming positive, trusting relationships.",
        contactName: "Sarah  Gale",
        contactAddress: "4 Bushy Court",
        contactCity: "Hampton Wick",
        contactState: "Surrey",
        contactPostal: "KT1 4DU",
        contactCountry: "United Kingdom",
        contactUrl: "http://www.stgregorysfoundation.org.uk",
        projectLink: "https://www.globalgiving.org/projects/russian-orphans/",
        progressReportLink:
          "https://www.globalgiving.org/projects/russian-orphans/updates/",
        themeName: "Mental Health",
        country: "Russia",
        iso3166CountryCode: "RU",
        region: "Europe and Russia",
        goal: 99240.0,
        funding: 93338.2,
        remaining: 5901.8,
        numberOfDonations: 746,
        status: "active",
        need:
          "Every year around 800 young people leave orphanages in St Petersburg. When they leave aged between 17 and 23 many of them will quickly find themselves homeless, involved in crime and risky behaviour.  Surveys show that six years later three out of every four will still feel isolated and find it difficult to cope with life.  Every aspect of their lives is affected: they are often unemployed, have poorer health, and find it difficult to maintain relationships.",
        longTermImpact:
          "The 60 young people who take part in our programme will learn to take responsibility and solve their own problems in the future. We believe this is essential for their future happiness, their employability and the success of their future family life.  Their success will benefit the whole community, meaning lower crime and anti-social behaviour and lower welfare dependency.",
        activities:
          "The project offers psychological support and training in social and life skills to 60 young people who are about to leave, or who have recently left state care.  This is through individual counselling and group work.  Volunteers who also grew up in orphanages use their own experience to help the younger orphans.  Our aim is to strengthen our young people emotionally, to widen their social network, to prepare them to their future family life and help them take responsibility for their own lives",
        imageLink: "https://www.globalgiving.org/pfil/4741/pict.jpg",
        imageGallerySize: 1,
        videos: {
          video: [
            {
              url: "",
            },
          ],
        },
        longitude: 30.322265625,
        latitude: 59.75639343261719,
        approvedDate: "2010-03-30T04:35:40-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 20,
              description:
                "will pay the expenses for 5 volunteer mentors to support our young people",
            },
            {
              amount: 50,
              description:
                "will pay for a group outing to a a special event to improve social skills",
            },
            {
              amount: 92,
              description:
                "will provide life-changing support and counselling for 2 months",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:32:32-04:00",
        numberOfReports: 62,
        dateOfMostRecentReport: "2022-02-21T11:34:44-05:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "edu",
              name: "Education",
            },
          ],
        },
        image: {
          title: "Prepare 100 Russian Orphans for Adult Life",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/4741/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/4741/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/4741/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/4741/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/4741/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/4741/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "Russia",
              iso3166CountryCode: "RU",
            },
          ],
        },
        type: "project",
      },
      {
        id: 8482,
        organization: {
          id: 7593,
          name: "Give an Hour",
          ein: "61-1493378",
          addressLine1: "PO Box 5918",
          addressLine2: "",
          city: "Bethesda",
          state: "MD",
          postal: "20824",
          iso3166CountryCode: "US",
          url: "http://www.giveanhour.org",
          logoUrl: "https://www.globalgiving.org/pfil/organ/7593/orglogo.png",
          mission:
            "Give an Hour's (501 c3) mission is to develop networks of skill-based volunteers capable of responding to both acute and chronic conditions prevalent within society.  Since 2005, the non-profit organization has provided free mental health services to U.S. service members, veterans and their families. In 2016, Give an Hour began expanding our efforts to address the mental health needs of other at risk or underserved populations including at risk teens, survivors of gun violence and those affected by natural and man-made disasters. Thus far, Give an Hour has donated approximately 325,000 hours of free care to those in need valued at approximately $32M.",
          totalProjects: 3,
          activeProjects: 2,
          themes: {
            theme: [
              {
                id: "edu",
                name: "Education",
              },
              {
                id: "covid-19",
                name: "COVID-19",
              },
              {
                id: "mentalhealth",
                name: "Mental Health",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "United States",
                iso3166CountryCode: "US",
              },
            ],
          },
          country: "United States",
        },
        active: true,
        title: "Free Counseling for Military Families across U.S.",
        summary:
          "Give an Hour (GAH) is a nonprofit 501(c)(3) that develops national networks of volunteers who are capable and committed to responding to acute needs within our society, beginning with the mental health needs of military service members and their loved ones affected by their time of service. In addition, GAH's Campaign to Change Direction is a collective impact effort to change the culture of mental health in America. Our services reach all 50 states, including DC.,Puerto Rico and Guam.",
        contactName: "Sally Charney",
        contactTitle: "Director of Communications and Partnerships",
        contactAddress: "PO Box 5918",
        contactCity: "Bethesda",
        contactState: "MD",
        contactPostal: "20824",
        contactCountry: "United States",
        contactUrl: "http://www.giveanhour.org",
        projectLink:
          "https://www.globalgiving.org/projects/free-mental-health-care-for-military-families/",
        progressReportLink:
          "https://www.globalgiving.org/projects/free-mental-health-care-for-military-families/updates/",
        themeName: "Mental Health",
        country: "United States",
        iso3166CountryCode: "US",
        region: "North America",
        goal: 175000.0,
        funding: 146323.15,
        remaining: 28676.85,
        numberOfDonations: 2043,
        status: "active",
        need:
          "As of May 2016, there are over 23 million living veterans. Over 2.6 million have been deployed to Iraq, Afghanistan, and the Persian Gulf since September 11, 2001. In addition to the physical injuries sustained by veterans, countless servicemen and servicewomen are experiencing mental health conditions directly related to their deployment. Give an Hour offers an essential option for men and women who might otherwise fail to seek appropriate mental health care. One in five Americans are impacted.",
        longTermImpact:
          "Delivering free counseling to our country's troops and loved ones can potentially help over 3 million Americans, since for each military member deployed, 8 -10 family members are directly affected. Of those deployed, 40%-nearly 800,000-are parents with 1 or more children; almost 35,000 troops have been separated from their children for 4 or more deployments. Many will suffer, and symptoms of post-traumatic stress and depression will cost as much as $6.2 billion in the 2 years after a deployment.",
        activities:
          "Give an Hour enlists volunteer mental health professionals to donate 1 hour per week to provide free, easily accessible, confidential counseling to military personnel and their loved ones. Studies show that timely attention and counseling can make a huge difference in the success of treating mental health issues such as post-traumatic stress. GAH has volunteers enlisted across the U.S., available to many who are not near a VA or military base or who can't/don't want to use VA services.",
        imageLink: "https://www.globalgiving.org/pfil/8482/pict.jpg",
        imageGallerySize: 7,
        videos: {
          video: [
            {
              url: "http://www.youtube.com/v/VTLVfk6dG2Q",
            },
          ],
        },
        approvedDate: "2011-08-02T00:00:00-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 19,
              description:
                "covers the cost of providing one hour of counseling",
            },
            {
              amount: 76,
              description:
                "allows Give an Hour to provide one month of counseling",
            },
            {
              amount: 228,
              description:
                "allows Give an Hour to provide three months of counseling",
            },
            {
              amount: 250,
              description:
                "pays for one tool kit of educational materials for staff or providers to bring to conferences and outreach events such as Yellow Ribbon events",
            },
            {
              amount: 456,
              description:
                "allows Give an Hour to provide six months of counseling",
            },
            {
              amount: 1500,
              description:
                "pays for one month of Web site that links those in need with free counseling",
            },
            {
              amount: 6000,
              description:
                "pays for annual fee to service that allows us to verify licenses of mental health professionals in our network",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:32:48-04:00",
        numberOfReports: 53,
        dateOfMostRecentReport: "2022-02-22T15:46:49-05:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "covid-19",
              name: "COVID-19",
            },
          ],
        },
        image: {
          title: "Free Counseling for Military Families across U.S.",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/8482/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/8482/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/8482/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/8482/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/8482/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/8482/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "United States",
              iso3166CountryCode: "US",
            },
          ],
        },
        type: "project",
      },
      {
        id: 18202,
        organization: {
          id: 18387,
          name: "Chhahari Nepal for Mental Health",
          addressLine1: "#184, Ekantakuna Heights,",
          addressLine2: "Machhindranath Road North",
          city: "Patan",
          state: "Province 3",
          postal: "GPO 8975",
          iso3166CountryCode: "NP",
          url: "http://www.cnmh.info",
          logoUrl: "https://www.globalgiving.org/pfil/organ/18387/orglogo.png",
          mission:
            "Chhahari Nepal for Mental Health (CNMH) is a non-profit, non-religious, and apolitical Non-Government Organisation (NGO), registered with the Government of Nepal. It was initiated in 2003  and formally registered as an NGO in 2009. It is dedicated to the vision of a just and equitable society, where the mental health needs and well-being of all women, men and children are addressed.  Chhahari Nepal's purpose is to facilitate appropriate support and treatment for the homeless and mentally distressed individuals, so that they can be accepted back into society.\n\n\"Chhahari\" in itself means 'shelter' or 'shade' in Nepali. Providing care/shelter  to the mentally distressed wherever they may be..",
          totalProjects: 2,
          activeProjects: 1,
          themes: {
            theme: [
              {
                id: "gender",
                name: "Gender Equality",
              },
              {
                id: "health",
                name: "Physical Health",
              },
              {
                id: "rights",
                name: "Justice and Human Rights",
              },
              {
                id: "mentalhealth",
                name: "Mental Health",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "Nepal",
                iso3166CountryCode: "NP",
              },
            ],
          },
          country: "Nepal",
        },
        active: true,
        title: "Care for the Mentally Distressed in Nepal",
        summary:
          'We require funding to sustain our weekly "Welcome Centre" which we initiated for our mentally distressed Clients. At the Centre we conduct activities that allow them the freedom of expression, interaction and building of self-esteem. We do this through counselling sessions, vocational classes, creative art and music therapy, yoga and outdoor activities. We also include their family & carers to be their support system. Our Team and Volunteers conduct regular home visits to motivate them.',
        contactName: "Bidya Maharjan",
        contactTitle: "Program Manager",
        contactAddress: "Afaldole, Dhobhighat, Lalitpur",
        contactAddress2: "Nepal",
        contactCity: "Kathmandu Valley",
        contactState: "Bagmati",
        contactPostal: "GPO 8975, EPC 983",
        contactCountry: "Nepal",
        contactUrl: "http://www.cnmh.info",
        projectLink:
          "https://www.globalgiving.org/projects/mental-health-nepal-chhahari-nepal-for-mental-health/",
        progressReportLink:
          "https://www.globalgiving.org/projects/mental-health-nepal-chhahari-nepal-for-mental-health/updates/",
        themeName: "Mental Health",
        country: "Nepal",
        iso3166CountryCode: "NP",
        region: "Asia and Oceania",
        goal: 50000.0,
        funding: 36750.75,
        remaining: 13249.25,
        numberOfDonations: 473,
        status: "active",
        need:
          "A meager 0.14% is spent by the Nepalese Government on mental health. This is allocated for hospital services only. Conventional treatments neglect cultural, spiritual & economic values. They disregard the importance of the role of families. Lack of awareness retains traditional beliefs of mental illness in society. Monthly household incomes average only about $50 while treatments cost a minimum of $20 each time.",
        longTermImpact:
          "Provision of treatment along with family support to Clients from 10 communities, gradually expanding outside of Kathmandu Valley.  Teaching them income generating skills beneficial to both them and their families.  Establishing a basket fund tfor treatment o supplement family resources.  Engaging the community, especially the youth, in raising awareness about mental health. And by facilitating capacity building opportunities through volunteering.",
        activities:
          "By providing a 'Welcome Centre' which includes free counselling sessions and creative therapy classes that engage the Clients, their Carers & family members.  By giving their family members space to express their anxieties and seek solutions for their problems.  And by negotiating affordable treatments at both government and private hospitals.",
        additionalDocumentation:
          "https://www.globalgiving.org/pfil/18202/projdoc.pdf",
        imageLink: "https://www.globalgiving.org/pfil/18202/pict.jpg",
        imageGallerySize: 7,
        videos: {
          video: [
            {
              url: "http://www.youtube.com/v/BK_zXCFZEDg",
            },
          ],
        },
        longitude: 83.814697265625,
        latitude: 28.077796936035156,
        approvedDate: "2014-09-01T00:00:00-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 30,
              description:
                'per month supports a person participating in the weekly "Welcome Centre".',
            },
            {
              amount: 70,
              description:
                "per month provides support to the family including regular home visits.",
            },
            {
              amount: 125,
              description:
                "per month provides a visit to a Psychiatrist and medication for one person",
            },
            {
              amount: 200,
              description:
                "per month helps us cover emergency residential costs for one person.",
            },
            {
              amount: 275,
              description:
                'per month supports 10 people participation in the weekly "Welcome Centre".',
            },
          ],
        },
        modifiedDate: "2022-06-19T01:33:32-04:00",
        numberOfReports: 33,
        dateOfMostRecentReport: "2022-01-19T09:27:55-05:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "health",
              name: "Physical Health",
            },
            {
              id: "rights",
              name: "Justice and Human Rights",
            },
          ],
        },
        image: {
          title: "Care for the Mentally Distressed in Nepal",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/18202/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/18202/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/18202/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/18202/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/18202/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/18202/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "Nepal",
              iso3166CountryCode: "NP",
            },
          ],
        },
        type: "project",
      },
      {
        id: 18973,
        organization: {
          id: 12701,
          name: "Tributaries International",
          ein: "13-4348221",
          addressLine1: "4299 George Washington Mem Hwy",
          addressLine2: "",
          city: "Hayes",
          state: "Virginia",
          postal: "23072",
          iso3166CountryCode: "US",
          url: "http://tributariesinternational.org/",
          logoUrl: "https://www.globalgiving.org/pfil/organ/12701/orglogo.jpg",
          mission:
            "Tributaries International promotes mental health, community capacity building, child protection, healing and reconciliation, and community development.",
          totalProjects: 7,
          activeProjects: 1,
          themes: {
            theme: [
              {
                id: "children",
                name: "Child Protection",
              },
              {
                id: "democ",
                name: "Peace and Reconciliation",
              },
              {
                id: "disaster",
                name: "Disaster Response",
              },
              {
                id: "gender",
                name: "Gender Equality",
              },
              {
                id: "human",
                name: "Ending Human Trafficking",
              },
              {
                id: "endabuse",
                name: "Ending Abuse",
              },
              {
                id: "mentalhealth",
                name: "Mental Health",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "Benin",
                iso3166CountryCode: "BJ",
              },
              {
                name: "Cambodia",
                iso3166CountryCode: "KH",
              },
              {
                name: "Cameroon",
                iso3166CountryCode: "CM",
              },
              {
                name: "Canada",
                iso3166CountryCode: "CA",
              },
              {
                name: "Congo, Democratic Republic of the",
                iso3166CountryCode: "CD",
              },
              {
                name: "Ecuador",
                iso3166CountryCode: "EC",
              },
              {
                name: "Liberia",
                iso3166CountryCode: "LR",
              },
              {
                name: "Myanmar",
                iso3166CountryCode: "MM",
              },
              {
                name: "Nepal",
                iso3166CountryCode: "NP",
              },
              {
                name: "Pakistan",
                iso3166CountryCode: "PK",
              },
              {
                name: "Peru",
                iso3166CountryCode: "PE",
              },
              {
                name: "Sri Lanka",
                iso3166CountryCode: "LK",
              },
              {
                name: "Thailand",
                iso3166CountryCode: "TH",
              },
              {
                name: "Togo",
                iso3166CountryCode: "TG",
              },
              {
                name: "Uganda",
                iso3166CountryCode: "UG",
              },
              {
                name: "United States",
                iso3166CountryCode: "US",
              },
            ],
          },
          country: "United States",
        },
        active: true,
        title: "Global Mental Health Training",
        summary:
          "The Tributaries mental health team provides mental health and trauma healing training for community workers worldwide. Training increases awareness of the causes and symptoms of emotional trauma and mental illness. Caregivers learn ways to care for others who have experienced trauma. and how to care themselves as they help others.",
        contactName: "Kay Helm",
        contactAddress: "4299 George Washington Mem Hwy",
        contactCity: "Hayes",
        contactState: "Virginia",
        contactPostal: "23072",
        contactCountry: "United States",
        contactUrl: "http://tributariesinternational.org/",
        projectLink:
          "https://www.globalgiving.org/projects/train-workers-for-mental-health-and-trauma/",
        progressReportLink:
          "https://www.globalgiving.org/projects/train-workers-for-mental-health-and-trauma/updates/",
        themeName: "Mental Health",
        country: "United States",
        iso3166CountryCode: "US",
        region: "North America",
        goal: 10000.0,
        funding: 8139.71,
        remaining: 1860.29,
        numberOfDonations: 174,
        status: "active",
        need:
          "There is a great need worldwide for mental health services, especially trauma. But those resources can be hard to access, expensive, or nonexistent - especially in the developing world. Often, mental illness and trauma is misunderstood and as a result people experiencing these issues can suffer additional trauma, stigma, and abuse.",
        longTermImpact:
          "We equip health care workers, religious leaders, orphanage workers and social workers, police, and teachers, and others to better understand and serve people in their communities. Training includes networking with local contacts and agencies so people in need can be connected with the proper resources. With advanced training and follow-ups, facilitators are identified and equipped to continue training.",
        activities:
          "With appropriate treatment, care and support, people with trauma and common mental illness such as depression, anxiety, and stress can lead normal and productive lives. Trained informal care providers are able to intervene early and provide a proper response. We are also working to put this training, targeted to the developing world where resources are scarce, into an online course format.",
        imageLink: "https://www.globalgiving.org/pfil/18973/pict.jpg",
        imageGallerySize: 7,
        videos: {
          video: [
            {
              url: "http://www.youtube.com/v/xFr3JZ7ac9Q",
            },
          ],
        },
        longitude: -76.51387023925781,
        latitude: 37.32478332519531,
        approvedDate: "2015-04-07T10:04:20-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 25,
              description: "Training Materials for one participant",
            },
            {
              amount: 100,
              description: "Provides 5 days of training for one participant",
            },
            {
              amount: 250,
              description: "Supplies for a children's program",
            },
            {
              amount: 1000,
              description: "Partial sponsorship of a training seminar",
            },
            {
              amount: 3000,
              description:
                "Covers most costs for a 5-day training seminar (30+ participants)",
            },
            {
              amount: 5000,
              description:
                "Sponsor a full seminar and follow up (developing world)",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:33:35-04:00",
        numberOfReports: 30,
        dateOfMostRecentReport: "2022-03-29T14:52:03-04:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "children",
              name: "Child Protection",
            },
            {
              id: "democ",
              name: "Peace and Reconciliation",
            },
            {
              id: "disaster",
              name: "Disaster Response",
            },
            {
              id: "endabuse",
              name: "Ending Abuse",
            },
          ],
        },
        image: {
          title: "Global Mental Health Training",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/18973/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/18973/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/18973/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/18973/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/18973/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/18973/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "United States",
              iso3166CountryCode: "US",
            },
          ],
        },
        type: "project",
      },
      {
        id: 19103,
        active: false,
        title: "Root cause treatment for 10 people for a year",
        summary:
          "Around 70% deaths globally are caused by non communicable conditions which are actually preventable. India happens to be one of the leading countries of this situation. To address this situation, Aashwasan Science offers spiritual technology that holds hope for the world as it connects people to their innate resources and unravels the root cause to bring cure, management and most importantly prevention - prevention not only in their lives but also for the coming generations.\n\nImportant Notice about Projects in India: We expect that there will be significant delays in getting funds to this project due to new regulatory requirements that impact GlobalGiving's ability to disburse to Indian-banked  organizations. GlobalGiving is working hard to address the issue, but there is a chance that we will be unable to disburse funds to this project. If we cannot disburse funds, donations to this project may be reallocated to another organization per our terms and conditions.",
        contactName: "Ravi Ramamurthy",
        contactAddress: "405 3 A Cross HRBR Layout2nd Block",
        contactAddress2: "Kammanahalli",
        contactCity: "Bengaluru",
        contactState: "Karnataka",
        contactPostal: "560043",
        contactCountry: "India",
        contactUrl: "http://www.aashwasan.org",
        projectLink: "https://www.globalgiving.org/projects/healthservices/",
        progressReportLink:
          "https://www.globalgiving.org/projects/healthservices/updates/",
        themeName: "Mental Health",
        country: "India",
        iso3166CountryCode: "IN",
        region: "Asia and Oceania",
        goal: 85714.0,
        funding: 2799.03,
        remaining: 82914.97,
        numberOfDonations: 29,
        status: "retired",
        need:
          "Conditions such as cancer, lifestyle, autoimmune, degenerative and genetic conditions etc are growing at an alarming rate. Suicides due to depression, psychiatric issues, broken familial environment are rapidly increasing. People are not happy. Stress is growing deeper into people's lives. Health has become a challenge. Lack of in-depth understanding about the actual root cause is leading to time consuming interventions, leaving people confused and hopeless.",
        longTermImpact:
          "1. Aashwasan methodology can eliminate long standing issues in people at root cause level, prevent conditions from recurring and prevent genetic malfunctions from being passed on to the next generation.   2. Holistic solutions help people cope with and face their situations gracefully thereby bringing hope and harmony to individuals, families and society 3. Increased self awareness in people helps them make healthy choices which can create a collective shift in global health.",
        activities:
          "Identifying and addressing the root cause of the issues is the only sure way of eliminating the condition. Aashwasan's unique scientific methodology helps in identifying and addressing the root cause of issues. This helps a person to connect to one's innate intelligence and self healing mechanisms, thereby restoring the individual's system to a healthy state of being.",
        additionalDocumentation:
          "https://www.globalgiving.org/pfil/19103/projdoc.pdf",
        imageLink: "https://www.globalgiving.org/pfil/19103/pict.jpg",
        imageGallerySize: 14,
        approvedDate: "2014-12-02T14:30:06-05:00",
        donationOptions: {
          donationOption: [
            {
              amount: 50,
              description: "will sponsor consultation for 1 person",
            },
            {
              amount: 100,
              description: "will sponsor consultation for 2 people",
            },
            {
              amount: 125,
              description:
                "will sponsor consultation for 2 people for complete health analysis",
            },
            {
              amount: 250,
              description: "will sponsor complete health analysis for 4 people",
            },
            {
              amount: 500,
              description:
                "will sponsor root cause analysis and treatment for 1 individual for 1 month",
            },
            {
              amount: 850,
              description:
                "will sponsor root cause treatment and support for 1 family for 1 month",
            },
            {
              amount: 1250,
              description: "will sponsor treatment 4 people for 1 month",
            },
            {
              amount: 2500,
              description: "will sponsor treatment for 4 people for 1 month",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:33:36-04:00",
        numberOfReports: 25,
        dateOfMostRecentReport: "2020-12-28T11:33:32-05:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "animals",
              name: "Animal Welfare",
            },
            {
              id: "health",
              name: "Physical Health",
            },
            {
              id: "covid-19",
              name: "COVID-19",
            },
          ],
        },
        notice:
          "Important Notice about Projects in India: We expect that there will be significant delays in getting funds to this project due to new regulatory requirements that impact GlobalGiving's ability to disburse to Indian-banked  organizations. GlobalGiving is working hard to address the issue, but there is a chance that we will be unable to disburse funds to this project. If we cannot disburse funds, donations to this project may be reallocated to another organization per our terms and conditions.",
        image: {
          title: "Root cause treatment for 10 people for a year",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/19103/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/19103/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/19103/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/19103/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/19103/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/19103/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "India",
              iso3166CountryCode: "IN",
            },
          ],
        },
        type: "project",
      },
      {
        id: 22987,
        organization: {
          id: 32209,
          name: "Central London Samaritans",
          addressLine1: "46 Marshall St",
          addressLine2: "",
          city: "London",
          state: "London",
          postal: "W1F 9BF",
          iso3166CountryCode: "GB",
          url: "http://www.samaritans.org/cls",
          logoUrl: "https://www.globalgiving.org/pfil/organ/32209/orglogo.png",
          mission:
            "Central London Samaritans, based in Soho, is the founding branch of the charity. We provide round the clock, non-judgmental emotional support for anyone who is struggling to cope. We listen, give people the time and space to work through their problems and find their own way forward. In the year 2018/19, our 400 Listening Volunteers responded to over 80,000 calls for help via phone, SMS and Email, supported over 4,000 contacts face to face, helped over 2,000 of London's most vulnerable people, including the homeless, the LGBT + community, those bereaved by suicide and people in prison. Our schools and university outreach programme raises awareness with young people and by working with businesses we are able to support and promote mental well-being in the workplace. We have never closed our phone lines since opening in 1953. It costs nearly £400,000 per annum to keep our phones and our door open. Our vision is that fewer people die by suicide.",
          totalProjects: 8,
          activeProjects: 1,
          themes: {
            theme: [
              {
                id: "mentalhealth",
                name: "Mental Health",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "United Kingdom",
                iso3166CountryCode: "GB",
              },
            ],
          },
          country: "United Kingdom",
        },
        active: true,
        title: "No call for help goes unanswered",
        summary:
          "Volunteers at Central London Samaritans provide confidential, non-judgemental, emotional support for anyone who is struggling to cope. We're here to listen round the clock every single day of the years. Since 1953 we have never closed our phone lines. We want to ensure that no call for help goes unanswered.",
        contactName: "Caroline Fahy",
        contactAddress: "46 Marshall Street",
        contactCity: "London",
        contactState: "",
        contactPostal: "W1B 9BF",
        contactCountry: "United Kingdom",
        contactUrl: "http://www.samaritans.org/cls",
        projectLink:
          "https://www.globalgiving.org/projects/no-call-for-help-goes-unanswered/",
        progressReportLink:
          "https://www.globalgiving.org/projects/no-call-for-help-goes-unanswered/updates/",
        themeName: "Mental Health",
        country: "United Kingdom",
        iso3166CountryCode: "GB",
        region: "Europe and Russia",
        goal: 45000.0,
        funding: 37653.82,
        remaining: 7346.18,
        numberOfDonations: 656,
        status: "active",
        need:
          "Sadly there was an increase in the number of suicides recorded in England & Wales in 2019 compared to the year before (data from the ONS). Men aged 45-49 remain at the highest risk of suicide in 2019, a worrying trend that has persisted for decades. We are also seeing a continued increase in suicides among young people, especially females under 25, increasing since 2012 to its highest level in 2019. One in fifteen adults in England say they have attempted suicide at some point in their life.",
        longTermImpact:
          "The role our volunteers play is crucial in suicide prevention. Not only it can save someone's life but also supporting someone who is in suicidal crisis prevents the tragic knock on suffering of the friends and family of the individual in question.  \"Its not that one phone call magically fixed everything - the problems were still there - but it was a turning point. And since then, I've been able to build the sort of life that would have seemed impossible to me.\" - Samaritans Caller",
        activities:
          "For almost everyone who contacts us, it's the human interaction that's important. Getting a response from a real person, being heard, not judged and offered a safe place to explore whatever is troubling our callers makes the difference. Almost three out of four people tell us that they feel more understood, and less alone or anxious, after contacting Samaritans. We know that our service can help people before it's too late.",
        additionalDocumentation:
          "https://www.globalgiving.org/pfil/22987/projdoc.pdf",
        imageLink: "https://www.globalgiving.org/pfil/22987/pict.jpg",
        imageGallerySize: 13,
        videos: {
          video: [
            {
              url: "http://www.youtube.com/v/hrhLD-RXwLs",
            },
          ],
        },
        longitude: -0.13780799508094788,
        latitude: 51.51268768310547,
        approvedDate: "2016-01-15T15:39:10-05:00",
        donationOptions: {
          donationOption: [
            {
              amount: 10,
              description:
                "will provide ongoing email support for someone struggling to cope",
            },
            {
              amount: 25,
              description: "will cover the cost of 5 calls for help",
            },
            {
              amount: 100,
              description:
                "will help experienced volunteers reach out to some of London's most vulnerable homeless people",
            },
            {
              amount: 225,
              description:
                "will help pay for the training cost of a new volunteer who typically will go on to help 250 people in need of emotional support per year",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:33:54-04:00",
        numberOfReports: 22,
        dateOfMostRecentReport: "2022-03-04T09:55:32-05:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
          ],
        },
        image: {
          title: "No call for help goes unanswered",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/22987/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/22987/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/22987/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/22987/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/22987/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/22987/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "United Kingdom",
              iso3166CountryCode: "GB",
            },
          ],
        },
        type: "project",
      },
      {
        id: 28013,
        organization: {
          id: 40895,
          name: "Center for Health & Learning",
          ein: "03-0351024",
          addressLine1: "28 Vernon St Ste 319",
          addressLine2: "",
          city: "Brattleboro",
          state: "VT",
          postal: "05301",
          iso3166CountryCode: "US",
          url: "https://healthandlearning.org/",
          logoUrl: "https://www.globalgiving.org/pfil/organ/40895/orglogo.jpg",
          mission:
            "Our Vision:\nTo serve as the nation's catalyst, inspiring optimal health for all.\n\nOur Mission:\nTo build a foundation for healthy communities, through educational resources, professional development and practice improvement, research, policy development, evaluation, and consult.\n\nOur Guiding Principles:\n*Equity and Access\n*Evidence and Outcomes-based Practice\n*Innovation\n*Collaboration\n*Community-oriented\n\nOur Goals & Activities\nIn our endeavor to achieve systemic and sustainable change through education, policy and environmental strategies, we:\n\n*Offer regional trainings and technical assistance through grant funding from federal, state and private agencies\n*Provide site-based trainings and technical assistance on request from school districts and community organizations\n*Develop online programs, student learning modules and curricula\n*Assist with professional licensure, CEU and graduate-level credit\n*Create strategic partnerships with other non-profit organizations and school systems\n\nCHL is an outgrowth of an initiative by the Center for Disease Control's Division of Adolescent and School Health to build local capacity for school and community health promotion through training centers that foster and deliver high-quality professional development and practice improvement initiatives. We have substantial experience designing and delivering projects, conferences and professional development opportunities. From instruction and technical assistance to research and report writing, curricula creation and evaluation resources, CHL has served over 20,000 professionals and community members, delivered services for more than 100 projects and developed and promoted numerous local and statewide comprehensive and coordinated strategic health initiatives.\n\nCHL has the following current programs and projects:  \n\n1. Suicide Prevention- \n* CHL supports state-wide suicide prevention efforts through the Vermont Suicide Prevention Center, a public/private partnership which seeks to foster a sustainable approach to suicide prevention in Vermont.\n*CHL manages the VT Suicide Prevention Coalition consisting of representatives from public health, education, state agencies, advocacy groups, youth, mental health services, and survivors.\n*CHL manages, develops and oversees state-wide suicide prevention trainings including Gatekeeper Training, a Zero Suicide Practice Institute and the Collaborative Assessment for the Management of Suicidality (CAMS) trainings;\n*CHL coordinates the VT Gun Shop Project in collaboration with the VT Department of Mental Health.\n*CHL implements the Zero Suicide approach in Vermont and coordinates Zero Suicide Pilot Projects.\n*CHL and the VT Suicide Prevention Center coordinate the annual Vermont Suicide Prevention Symposium, a cross-agency statewide event that brings together professionals across all sectors for a day of learning from national experts on critical topics and skills in suicide prevention, treatment, and recovery. \n\n2. Prevention Training and Workforce Development - CHL coordinates and implements Substance Abuse Disorder prevention trainings and workforce development activities for the Vermont Department of Health/Division of Alcohol and Drug Abuse Programs for Regional Prevention Partnership professional staff.\n\n3. Annual Symposia and Conferences: In addition to the Suicide Prevention Symposium, our cornerstone event, CHL assists with the coordination of annual Symposia and Conferences for various partners including the following events:\no 4th Annual College Symposium on Substance Use \no Community Solutions to the Opiate Issues Facing Vermonters for the VT Department of Health \no Substance Abuse Workforce Development Conference for the VT Department of Health.\n\n4.  CHL Proprietary and Fee for Service: CHL has several proprietary programs developed and implemented by the organization:  \n\n*Umatter Suicide Prevention for Schools and Umatter for Staff and Family Awareness -CHL developed this best practice training for school and community settings.\n*Umatter for Youth and Young Adults Mental Health Wellness Promotion and Community Action--CHL is moving the focus on mental health \"upstream\" from intervention and crisis to promotion and prevention (self-care, coping and communication skills, etc.). \n*Community / School District Trainings--CHL provides professional development, technical assistance and support for the implementation of coordinated approaches to school health, and conducts training on mental health, suicide prevention and alcohol, tobacco, sexual health and other critical health topics. \n*Family Engagement- CHL is building an initiative to promote effective practices for Family Engagement - an emerging interest across sectors",
          totalProjects: 4,
          activeProjects: 2,
          themes: {
            theme: [
              {
                id: "children",
                name: "Child Protection",
              },
              {
                id: "edu",
                name: "Education",
              },
              {
                id: "gender",
                name: "Gender Equality",
              },
              {
                id: "health",
                name: "Physical Health",
              },
              {
                id: "lgbtq",
                name: "LGBTQIA+ Equality",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "United States",
                iso3166CountryCode: "US",
              },
            ],
          },
          country: "United States",
        },
        active: true,
        title: "Umatter -- Prevent Teen Suicide in New England!",
        summary:
          "You matter because you may need help.   You matter because you are in a position to help.   Umatter is a suicide prevention program for youth and adults that teaches self-care and caring for others. Umatter trains teams of young people and professionals about mental health, signs of suicide, and how to help. Umatter supports community action projects that create a culture where people know they can make a difference, and THEY MATTER.",
        contactName: "Sara Haimowitz",
        contactAddress: "28 Vernon St Ste 319",
        contactCity: "Brattleboro",
        contactState: "VT",
        contactPostal: "05301",
        contactCountry: "United States",
        contactUrl: "https://healthandlearning.org/",
        projectLink: "https://www.globalgiving.org/projects/umatter/",
        progressReportLink:
          "https://www.globalgiving.org/projects/umatter/updates/",
        themeName: "Mental Health",
        country: "United States",
        iso3166CountryCode: "US",
        region: "North America",
        goal: 20000.0,
        funding: 15643.92,
        remaining: 4356.08,
        numberOfDonations: 300,
        status: "active",
        need:
          "Suicides have become the second-leading cause of death among teenagers in the United States. More youth die by suicide than from cancer, heart disease, AIDS, birth defects, stroke, pneumonia, influenza, and chronic lung disease. Why do people die by suicide? People who survive suicide attempts say they wanted to end the pain of feeling alone, like a burden, and hopeless. Anyone can be at risk of suicide if they become overwhelmed by stress and don't find their way to support.",
        longTermImpact:
          "Funds for Umatter will support work with 100 youth in 12 communities in New England. Youth will benefit from positive relationships with adults in the program, learn how to help other youth at risk, and gain from facilitating Action Projects. 100s more youth will benefit from their contact with Community Action Projects.",
        activities:
          "Umatter is a suicide prevention program that promotes mental health, teaches self-care, risk assessment, coping and help-seeking skills to school staff, mental health and youth serving professionals, community members, and young people. Young people and adults learn to recognize and address depression and risk factors and build strengths through self-care and community action. Students receive knowledge and skills to recognize signs of depression and how to help.",
        imageLink: "https://www.globalgiving.org/pfil/28013/pict.jpg",
        imageGallerySize: 6,
        approvedDate: "2017-08-31T14:56:11-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 10,
              description:
                "Pays for a gift card for one teen to participate in the Umatter Advisory Groups!",
            },
            {
              amount: 25,
              description:
                "Provides 10 training booklets for student peer counselors and adult counselors on suicide prevention",
            },
            {
              amount: 50,
              description:
                "Supports 2 students' participation in Umatter Advisory groups where they can make sure that adults know how to work effectively with youth.",
            },
            {
              amount: 100,
              description:
                "Funds student leader's participation in Umatter events to plan the Umatter implementation in their region.",
            },
            {
              amount: 250,
              description:
                "Funds 6 Umatter short sessions that teach young people self care and how to help their peers",
            },
            {
              amount: 500,
              description:
                'Funds the making of Umatter videos, including: "Getting through Depression" and "Deal Better with Hard Times".',
            },
            {
              amount: 1000,
              description:
                "Funds five youth produced community action projects, promoting community wellness and touching the lives of 100s of youth",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:34:15-04:00",
        numberOfReports: 17,
        dateOfMostRecentReport: "2022-04-20T19:48:49-04:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "edu",
              name: "Education",
            },
            {
              id: "health",
              name: "Physical Health",
            },
            {
              id: "covid-19",
              name: "COVID-19",
            },
          ],
        },
        image: {
          title: "Umatter -- Prevent Teen Suicide in New England!",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/28013/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/28013/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/28013/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/28013/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/28013/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/28013/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "United States",
              iso3166CountryCode: "US",
            },
          ],
        },
        type: "project",
      },
      {
        id: 31739,
        active: false,
        title: "Help schools address mental health and suicide",
        summary:
          "Many schools struggle to talk about mental health. Some schools ban conversations about suicide altogether, fearing 'suicide contagion.' Unsilence's TOMORROW is an online learning experience and classroom program. It uses interactive storytelling to help teens and teachers build the skills to talk about suicide, depression, and mental health in appropriate and effective ways. Help us make a difference in our school and communities TODAY.",
        contactName: "Danny M. Cohen",
        contactAddress: "3535 N Fremont St",
        contactAddress2: "#3",
        contactCity: "Chicago",
        contactState: "IL",
        contactPostal: "60657",
        contactCountry: "United States",
        contactUrl: "http://www.unsilence.org",
        projectLink: "https://www.globalgiving.org/projects/unsilence-suicide/",
        progressReportLink:
          "https://www.globalgiving.org/projects/unsilence-suicide/updates/",
        themeName: "Mental Health",
        country: "United States",
        iso3166CountryCode: "US",
        region: "North America",
        goal: 15000.0,
        funding: 12273.38,
        remaining: 2726.62,
        numberOfDonations: 206,
        status: "retired",
        need:
          "Mental health care is a human right. Yet, too often, our schools and communities do not support young people and their families to talk about mental health, depression, and suicide. This barrier to open dialogue prevents young people from seeking out and accessing the necessary resources and mental health care. Unsilence drives social change by breaking the personal, cultural, and institutional barriers that prevent open dialogue and education on human rights, including suicide prevention.",
        longTermImpact:
          "When we share hidden stories - stories of pain, loss, shame, and taboos we've been too afraid to speak about - we give permission for others to share hidden stories, too. Through interactive storytelling and educator training, Unsilence's TOMORROW inspires dialogue about mental health and suicide prevention to schools and communities. A recent Northwestern University study of Unsilence's TOMORROW shows that our online and live programs lead to a significant increase in learners' social empathy.",
        activities:
          "Unsilence creates dynamic learning experiences for youth and the public. We train educators and community leaders to spark dialogue, support critical thinking, and build empathy to inspire healing and social change. Our programs are learner-centered and support young people to make personal connections to complex and challenging issues of social justice and human rights. Learners cultivate a deep sense of social responsibility and develop expertise in self-directed and group-based social action.",
        imageLink: "https://www.globalgiving.org/pfil/31739/pict.jpg",
        imageGallerySize: 7,
        longitude: -87.63666534423828,
        latitude: 41.86398696899414,
        approvedDate: "2018-03-12T00:00:00-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 25,
              description:
                "will help us bring our mental health content to 50 members of the public",
            },
            {
              amount: 50,
              description:
                "will provide training to a teacher to engage teens in a dialogue about mental health and suicide prevention",
            },
            {
              amount: 100,
              description:
                "will support our community outreach to bring conversations about mental health to more schools",
            },
            {
              amount: 250,
              description:
                "will fund education support for a cohort of teachers",
            },
            {
              amount: 500,
              description:
                "will fund a live school-wide youth workshop on mental health and suicide prevention",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:34:32-04:00",
        numberOfReports: 13,
        dateOfMostRecentReport: "2021-12-25T21:23:33-05:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "edu",
              name: "Education",
            },
          ],
        },
        image: {
          title: "Help schools address mental health and suicide",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/31739/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/31739/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/31739/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/31739/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/31739/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/31739/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "United States",
              iso3166CountryCode: "US",
            },
          ],
        },
        type: "project",
      },
      {
        id: 31979,
        organization: {
          id: 46218,
          name: "Healing Together",
          ein: "45-4315806",
          addressLine1: "5111 Telegraph Avenue",
          addressLine2: "#310",
          city: "Oakland",
          state: "CA",
          postal: "94609",
          iso3166CountryCode: "US",
          url: "https://www.wearehealingtogether.org/",
          logoUrl: "https://www.globalgiving.org/pfil/organ/46218/orglogo.png",
          mission:
            "We build community resilience by unlocking the power of everyday people to heal and break cycles of trauma and violence",
          totalProjects: 3,
          activeProjects: 3,
          themes: {
            theme: [
              {
                id: "children",
                name: "Child Protection",
              },
              {
                id: "edu",
                name: "Education",
              },
              {
                id: "gender",
                name: "Gender Equality",
              },
              {
                id: "health",
                name: "Physical Health",
              },
              {
                id: "rights",
                name: "Justice and Human Rights",
              },
              {
                id: "lgbtq",
                name: "LGBTQIA+ Equality",
              },
              {
                id: "disability",
                name: "Disability Rights",
              },
              {
                id: "endabuse",
                name: "Ending Abuse",
              },
              {
                id: "mentalhealth",
                name: "Mental Health",
              },
              {
                id: "justice",
                name: "Racial Justice",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "Nepal",
                iso3166CountryCode: "NP",
              },
              {
                name: "Uganda",
                iso3166CountryCode: "UG",
              },
              {
                name: "United States",
                iso3166CountryCode: "US",
              },
            ],
          },
          country: "United States",
        },
        active: true,
        title: "Training Ugandans in Trauma Informed Care",
        summary:
          "This project equips local leaders in Uganda with mental health and trauma informed care knowledge and skills, so they can support survivors in their communities, disrupt cycles of trauma and violence, and break the stigma around mental health.  Trainings are designed for everyday community leaders who may have little to no prior mental health knowledge - including teachers, health workers, faith leaders, local government leaders, and more.",
        contactName: "Amy Paulson",
        contactAddress: "5111 Telegraph Avenue #310",
        contactCity: "Oakland",
        contactState: "CA",
        contactPostal: "94609",
        contactCountry: "United States",
        contactUrl: "https://www.wearehealingtogether.org/",
        projectLink:
          "https://www.globalgiving.org/projects/heal-trauma-in-uganda/",
        progressReportLink:
          "https://www.globalgiving.org/projects/heal-trauma-in-uganda/updates/",
        themeName: "Mental Health",
        country: "Uganda",
        iso3166CountryCode: "UG",
        region: "Africa",
        goal: 15000.0,
        funding: 13723.39,
        remaining: 1276.61,
        numberOfDonations: 247,
        status: "active",
        need:
          "In Uganda, over 1 million children have been orphaned by HIV/AIDS (UNICEF). Meanwhile, over 50% of young women have experienced violence (Uganda Demographic & Health Survey), and reports of gender based violence have risen since the start of COVID-19.   As such, resources for mental health and trauma healing are in demand. Yet lack of skilled workers, facilities, public budget, and deep stigma prevent the majority of the population from receiving any care, let alone effective care.",
        longTermImpact:
          "Over the long term, building the capacity of a community to respond to their own mental health needs leads to healing and self-efficacy of survivors, which has a ripple effect on physical, mental, emotional, social, and economic health and wellbeing, at the individual and collective level. Our impact research reveals that our training graduates have also overcome addiction and depression, trained and counseled family and community, started mental health NGOs, and interrupted community violence.",
        activities:
          "This project trains local leaders to become their own communities' mental health advocates. They learn culturally relevant knowledge and skills in crisis response and emotional first aid, peer counseling, and trauma-informed care to 1) support their own healing, 2) help survivors heal, 3) disrupt generational cycles of trauma and violence in the community, and 4) break stigma around mental health and healing.",
        imageLink: "https://www.globalgiving.org/pfil/31979/pict.jpg",
        imageGallerySize: 4,
        longitude: 30.43856430053711,
        latitude: -0.5714489817619324,
        approvedDate: "2018-03-12T00:00:00-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 10,
              description: "will help 22 survivors heal",
            },
            {
              amount: 30,
              description: "will help 66 survivors heal",
            },
            {
              amount: 50,
              description: "will help 110 survivors heal",
            },
            {
              amount: 100,
              description: "will help 220 survivors heal",
            },
            {
              amount: 150,
              description: "will help 330 survivors heal",
            },
            {
              amount: 200,
              description: "will help 440 survivors heal",
            },
            {
              amount: 500,
              description: "will help 1100 survivors heal",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:34:33-04:00",
        numberOfReports: 15,
        dateOfMostRecentReport: "2022-06-06T12:15:50-04:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "edu",
              name: "Education",
            },
            {
              id: "endabuse",
              name: "Ending Abuse",
            },
          ],
        },
        image: {
          title: "Training Ugandans in Trauma Informed Care",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/31979/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/31979/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/31979/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/31979/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/31979/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/31979/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "Uganda",
              iso3166CountryCode: "UG",
            },
          ],
        },
        type: "project",
      },
      {
        id: 33013,
        organization: {
          id: 25441,
          name: "Mirabel Pictures / WeOwnTV",
          ein: "46-0656106",
          addressLine1: "90 Mirabel Ave",
          addressLine2: "",
          city: "San Francisco",
          state: "CA",
          postal: "94110",
          iso3166CountryCode: "US",
          url: "https://www.mirabelpictures.org/",
          logoUrl: "https://www.globalgiving.org/pfil/organ/25441/orglogo.jpg",
          mission:
            "Our mission is to create artistically bold projects that explore the critical issues of our time. We believe filmmaking is a social act of deep connection capable of catalyzing positive change. With all of our projects, we work to cultivate community engagement that inspires, educates, and transforms audiences into socially engaged citizens. Our films address a diverse array of issues and we have a customized approach to each outreach campaign. \n\nWe are also deeply committed to media education. In 2009 we co-founded the WeOwnTV Freetown Media Centre together with local Sierra Leonean filmmakers Arthur Pratt and Lansana Mansaray. The media center is an important educational and creative hub in the heart of the capital city in Sierra Leone. In 2017 we expanded our reach by launching the WeOwnTV Filmmaker Fellowship: a film fund and professional development program supporting the production of independent documentaries directed by West African filmmakers. The program is open to filmmaker working in Ghana, Guinea, Liberia and Sierra Leone.",
          totalProjects: 11,
          activeProjects: 6,
          themes: {
            theme: [
              {
                id: "children",
                name: "Child Protection",
              },
              {
                id: "climate",
                name: "Climate Action",
              },
              {
                id: "democ",
                name: "Peace and Reconciliation",
              },
              {
                id: "disaster",
                name: "Disaster Response",
              },
              {
                id: "ecdev",
                name: "Economic Growth",
              },
              {
                id: "gender",
                name: "Gender Equality",
              },
              {
                id: "health",
                name: "Physical Health",
              },
              {
                id: "human",
                name: "Ending Human Trafficking",
              },
              {
                id: "rights",
                name: "Justice and Human Rights",
              },
              {
                id: "tech",
                name: "Digital Literacy",
              },
              {
                id: "art",
                name: "Arts and Culture",
              },
            ],
          },
          countries: {
            country: [
              {
                name: "Ghana",
                iso3166CountryCode: "GH",
              },
              {
                name: "Guinea",
                iso3166CountryCode: "GN",
              },
              {
                name: "Liberia",
                iso3166CountryCode: "LR",
              },
              {
                name: "Sierra Leone",
                iso3166CountryCode: "SL",
              },
              {
                name: "United States",
                iso3166CountryCode: "US",
              },
            ],
          },
          country: "United States",
        },
        active: true,
        title: "Heaven Through the Backdoor",
        summary:
          '"Heaven Through the Backdoor" explores identity, judgment, and spirituality through the experience of Swiss emigre Yo (Yolanda Shae), a fiercely independent 88-year old woman who we meet as she prepares for her next great adventure: death. The project juxtaposes intimate documentary footage of the last year of Yo\'s life with cinematic interpretations of her stories. The film highlights the enduring power of friendship and what we learn from each other in life and through death.',
        contactName: "Anna Fitch",
        contactAddress: "90 Mirabel Ave",
        contactCity: "San Francisco",
        contactState: "CA",
        contactPostal: "94110",
        contactCountry: "United States",
        contactUrl: "http://weowntv.org/",
        projectLink:
          "https://www.globalgiving.org/projects/heaven-through-the-backdoor/",
        progressReportLink:
          "https://www.globalgiving.org/projects/heaven-through-the-backdoor/updates/",
        themeName: "Mental Health",
        country: "United States",
        iso3166CountryCode: "US",
        region: "North America",
        goal: 25000.0,
        funding: 22795.43,
        remaining: 2204.57,
        numberOfDonations: 108,
        status: "active",
        need:
          "When asked, most Americans have an opinion about how they want to die, but struggle to communicate and plan for that stage. The CDC reports that 70% of Americans say they would prefer to die at home, yet more than 70% actually die in a hospital, nursing home or long-term care facility. 80% of people say that if seriously ill, they would want to talk to their doctor about end-of-life care, yet only 7% report having had an end-of-life conversation with their doctor.",
        longTermImpact:
          "We believe that this project's unexpected, artful and intimate approach to this topic has the potential to catalyze thinking and conversation around family, aging and end of life.  Thinking and talking about plans for the end of one's life is important and it often happens far too  late. We want to get people talking about these issues early so that their wishes can be respected.  We see this project as part of important cultural shift around attitudes towards death, old age and dying.",
        activities:
          "Documentary films can connect people around issues.  The films subject Yo, was diagnosed with congestive heart failure and told she only had days or weeks to live. She lived for another year despite the prediction of imminent death. Yo invites us into this vulnerable rarely seen phase of life.  We see her reject a medicalized death and chose to spend the end of her life in her home independently. Yo's candor, openness and humor can spark important dialogues about how we want to end our days.",
        imageLink: "https://www.globalgiving.org/pfil/33013/pict.jpg",
        imageGallerySize: 1,
        approvedDate: "2018-04-27T16:13:37-04:00",
        donationOptions: {
          donationOption: [
            {
              amount: 10,
              description: "will pay for miniature set pieces.",
            },
            {
              amount: 25,
              description: "fabrics for set building",
            },
            {
              amount: 50,
              description: "printing archival photos",
            },
            {
              amount: 100,
              description: "carpentry materials for set exterior",
            },
            {
              amount: 250,
              description: "camera and lighting rental",
            },
            {
              amount: 500,
              description: "location shooting costs",
            },
            {
              amount: 1000,
              description: "location shooting staff",
            },
            {
              amount: 2000,
              description: "editorial costs",
            },
          ],
        },
        modifiedDate: "2022-06-19T01:34:37-04:00",
        numberOfReports: 16,
        dateOfMostRecentReport: "2022-02-28T16:21:14-05:00",
        themes: {
          theme: [
            {
              id: "mentalhealth",
              name: "Mental Health",
            },
            {
              id: "health",
              name: "Physical Health",
            },
            {
              id: "art",
              name: "Arts and Culture",
            },
          ],
        },
        image: {
          title: "Heaven Through the Backdoor",
          id: 0,
          imagelink: [
            {
              url: "https://www.globalgiving.org/pfil/33013/pict_grid1.jpg",
              size: "small",
            },
            {
              url: "https://www.globalgiving.org/pfil/33013/pict_thumbnail.jpg",
              size: "thumbnail",
            },
            {
              url: "https://www.globalgiving.org/pfil/33013/pict_med.jpg",
              size: "medium",
            },
            {
              url: "https://www.globalgiving.org/pfil/33013/pict_grid7.jpg",
              size: "large",
            },
            {
              url: "https://www.globalgiving.org/pfil/33013/pict_large.jpg",
              size: "extraLarge",
            },
            {
              url: "https://www.globalgiving.org/pfil/33013/pict_original.jpg",
              size: "original",
            },
          ],
        },
        countries: {
          country: [
            {
              name: "United States",
              iso3166CountryCode: "US",
            },
          ],
        },
        type: "project",
      },
    ],
    numberFound: 106,
  },
};

const Support = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchCharities().then((data) => {
      setIsLoading(false);
      setCharities(data?.projects?.project);
    });
  }, []);

  return (
    <Box>
      <Navbar />
      <Box position="relative" w="100vw" h="75vh">
        <Image
          objectPosition="center"
          objectFit="cover"
          src={CharityBg}
          alt="Charity Hero Section Banner"
          w="100%"
          h="100%"
        />
        <Flex
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.75)"
          justify="center"
          align="center"
          direction="column"
          zIndex={10}
        >
          <Heading textAlign="center" color="white" fontSize="5xl">
            Giving is not just about making a donation.
            <br />
            It is about making a difference
          </Heading>
        </Flex>
      </Box>
      <Box bg="gray.100" py="2rem" px="10rem">
        <Heading fontSize="lg">
          Donate to Charities working on mental health and help others fight
          this battle
        </Heading>
        <Divider borderColor="#1d1d1d" my={4} />
        {isLoading ? (
          <Flex
            justify="center"
            align="center"
            direction="column"
            textAlign="center"
          >
            <CircularProgress isIndeterminate />
            <Text mt={4}>Fetching Charities...</Text>
          </Flex>
        ) : (
          charities.map((charity) => (
            <CharityCard
              key={charity.id}
              imageLink={charity.imageLink}
              title={charity.title}
              summary={charity.summary}
              contactName={charity.contactName}
              contactAddress={charity.contactAddress}
              contactCity={charity.contactCity}
              contactState={charity.contactState}
              contactPostal={charity.contactPostal}
              donationOptions={charity.donationOptions.donationOption}
              country={charity.country}
              need={charity.need}
              longTermImpact={charity.longTermImpact}
              goal={charity.goal}
              funding={charity.funding}
              remaining={charity.remaining}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Support;
