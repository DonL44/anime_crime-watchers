import {SiGithub} from 'react-icons/si';
import {SiLinkedin} from 'react-icons/si';

const people = [
    {
      name: 'Tanya',
      role: 'Front-End',
      imageUrl:
        'https://avatars.githubusercontent.com/u/92898110?v=4',
      twitterUrl: 'https://github.com/tanyaleepr',
      linkedinUrl: 'https://www.linkedin.com/in/tanyagonzalez/',
    },

    {
        name: 'Don-EL',
        role: 'Front-End',
        imageUrl:
          'https://media-exp1.licdn.com/dms/image/C5603AQHlZdd9x7Q4rQ/profile-displayphoto-shrink_800_800/0/1652917802132?e=1658361600&v=beta&t=fCpe_bsJlCq4xzcdNnvXjNU2V6zm-04ir3W-KPp57P0',
        twitterUrl: 'https://github.com/DonL44',
        linkedinUrl: 'https://www.linkedin.com/in/donovan-looney-190941233/',
      },

      {
        name: 'Ashley',
        role: 'Back-End',
        imageUrl:
          'https://avatars.githubusercontent.com/u/95392451?v=4',
        twitterUrl: 'https://github.com/ashleyhodge',
        linkedinUrl: 'https://www.linkedin.com/in/ashley-hodge-227285138/',
      },

      {
        name: 'Paul',
        role: 'Back-End',
        imageUrl:
          'https://avatars.githubusercontent.com/u/95047881?v=4',
        twitterUrl: 'https://github.com/pshertzi',
        linkedinUrl: 'https://www.linkedin.com/in/paul-shertzinger-5a9869b3/',
      },
    // More people...
  ]


  
  export default function Example() {
    return (
      <div id="contact" className="bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet our team</h2>
              <p className="text-xl text-gray-300">
                Hey! Welcome to our final project of a Coding Boot Camp that we all are attending. It's been a long journey and we would like to show you the fruit of our labor. We hope you find our final project impressive!
              </p>
            </div>
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {people.map((person) => (
                <li key={person.name} className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3 className="text-white">{person.name}</h3>
                        <p className="text-[#dfc100]">{person.role}</p>
                      </div>
  
                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Twitter</span>
                              <SiGithub className="w-5 h-5"/>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <SiLinkedin className="w-5 h-5"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    )
  }

  