const faqs = {
  "Health and Wellness": {
    "How can I access affordable healthcare as an underprivileged child?": "You may be eligible for government healthcare programs like Medicaid or CHIP, which provide low-cost or free healthcare.",
    "What can I do to stay healthy on a tight budget?": "Focus on a balanced diet, regular exercise, and utilize low-cost preventive healthcare services.",
    "How can I find mental health support if I'm struggling with my emotions?": "Reach out to school counselors, local mental health clinics, or nonprofit organizations that offer counseling services.",
    "What are some resources for learning about healthy eating and nutrition?": "Check local community centers for nutrition classes and use online resources from organizations like MyPlate.",
    "How can I access free or low-cost dental care?": "Look for local dental clinics or nonprofits that offer dental services to underprivileged children.",
    "Where can I find information on free or low-cost vaccinations?": "Many local health departments offer free or low-cost vaccination clinics for children.",
    "How can I learn about the importance of mental health and self-care?": "Seek out school programs, workshops, or online resources dedicated to mental health and self-care.",
    "Where can I get information on healthy lifestyle choices and avoiding substance abuse?": "School counselors, community organizations, and online resources like the National Institute on Drug Abuse provide valuable information on healthy living and substance abuse prevention.",
    "How can I deal with bullying and cyberbullying and protect my mental health?": "Talk to trusted adults and school authorities, and utilize resources like stopbullying.gov to address and prevent bullying.",
    "Where can I find support for managing chronic health conditions?": "Many organizations offer support groups and educational resources for children and families dealing with chronic health conditions."
  },
  "Jobs and Career": {
    "What resources are available to help me explore different career options?": "You can speak to your school counselor, attend career fairs, and use online career assessment tools.",
    "How can I access job training and skill development programs?": "Check with local job training centers, community colleges, or government programs that offer job training to underprivileged individuals.",
    "What are some tips for writing a strong resume and cover letter?": "Online resources and career development programs often provide guidance on creating effective resumes and cover letters.",
    "Where can I search for job opportunities suitable for my age and experience?": "Websites like Snagajob, Indeed, and local job boards often list entry-level job opportunities for young job seekers.",
    "How can I prepare for a job interview?": "Seek guidance from career counselors, practice interview questions, and participate in mock interview programs.",
    "What are some career paths that don't require a college degree?": "Careers like plumbing, electrician work, and HVAC technician often offer apprenticeships and on-the-job training without the need for a college degree.",
    "Where can I find information on apprenticeship programs in my area?": "Contact local trade unions, vocational schools, or government agencies for information on apprenticeship programs.",
    "How can I improve my networking skills and build professional relationships?": "Attend career networking events, use social media for professional connections, and participate in local business associations or clubs.",
    "How can I get help with writing a job application or finding job leads?": "Reach out to local workforce development centers, employment agencies, and career counselors for assistance in job searching and applications.",
    "What steps can I take to pursue higher education or vocational training?": "Explore financial aid options, scholarships, and grants for underprivileged students, and speak to your school counselor for guidance on further education."
  },
  "Lifestyle": {
    "How can I access affordable clothing and personal hygiene products?": "Look for local charities, clothing banks, and shelters that provide clothing and hygiene items to those in need.",
    "What are some tips for budgeting and managing personal finances?": "Financial literacy programs and online resources can help you learn about budgeting and managing money effectively.",
    "How can I make healthy food choices on a limited budget?": "Seek out local food banks, participate in food assistance programs, and explore low-cost, nutritious recipes.",
    "What are some fun and affordable recreational activities for children?": "Public parks, community centers, and local events often offer free or low-cost recreational activities for children and families.",
    "How can I access transportation if I don't have a car?": "Public transportation, carpools, and biking or walking can be affordable alternatives for getting around.",
    "How can I stay connected with friends and family when I can't afford a phone or internet?": "Libraries, community centers, and schools often provide free internet access, and you can use these facilities to stay in touch.",
    "How can I maintain a positive outlook and mental well-being despite challenges?": "Engage in positive activities, practice gratitude, and seek support from friends and trusted adults.",
    "What are some creative ways to express myself and pursue my interests without spending much money?": "Writing, drawing, crafting, and exploring nature are cost-effective ways to express yourself and discover your passions.",
    "How can I stay motivated to pursue my goals and dreams in life?": "Set specific goals, break them into smaller steps, and stay persistent in your efforts.",
    "How can I address discrimination or social injustice in my community?": "Join or support local advocacy organizations and participate in community events aimed at raising awareness and advocating for change."
  },
  "Programs available for help": {
    "What government programs are available to assist underprivileged children and families?": "Programs like SNAP (food stamps), WIC, TANF, and Head Start provide various forms of assistance for underprivileged families.",
    "How can I find local nonprofits and charities that provide assistance to underprivileged children?": "Search online, ask your school counselor, or contact local government agencies to find information about charitable organizations in your area.",
    "What services do community centers offer for underprivileged children?": "Many community centers provide after-school programs, tutoring, and recreational activities for children.",
    "Are there local shelters or housing assistance programs for underprivileged families?": "Contact local shelters and housing authorities for information on emergency housing and housing assistance programs.",
    "How can I access free or low-cost counseling and mental health services?": "Reach out to local mental health clinics, schools, and nonprofit organizations that offer counseling services to underprivileged individuals.",
    "Where can I find information on government-sponsored child nutrition programs?": "Government websites and school counselors can provide information on programs like the National School Lunch Program and School Breakfast Program.",
    "How can I learn about local employment and job training programs for youth?": "Check with local workforce development centers, job training organizations, and your school's career counseling services.",
    "What programs are available to provide assistance with heating and utility bills?": "Government programs like LIHEAP offer assistance with heating and utility bills for eligible families.",
    "Are there programs that provide free or low-cost school supplies for underprivileged students?": "Local nonprofits, schools, and charities often organize back-to-school drives that provide school supplies to underprivileged students.",
    "How can I access programs that offer free or low-cost extracurricular activities for children?": "Check with local community centers, schools, and nonprofits for programs that offer free or low-cost recreational activities and classes."
  }
};


greeting_text = `hi, {name} I'm here to help you with your queries. Please select a category.`;

function appenGreeting(name){
  greeting_text = greeting_text.replace("{name}", name);
  greeting  = `<div class="media media-chat media-chat-reverse d-flex">`;
  greeting += `<div class="media-body" id="chat-body">`;
  greeting += `<p>${greeting_text}</p>`;
  greeting += `</div>`;
  greeting += `</div>`;
  $("#chat-content").append(greeting);
}

function getAllCategory() {
  return Object.keys(faqs);
}

function getQuestionByCategory(category){
  question = faqs[category];

  // for qeustions
  if(question === undefined){
    for(key in faqs){
      for(subkey in faqs[key]){
        if(subkey.includes(category)){
          return [faqs[key][subkey]];
        }
      }
      
    }
  }

  // for first level category
  questions = Object.keys(question); 
  return questions
}