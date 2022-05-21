const people = [
    {
      name: 'Tanya',
      role: 'Front-End',
      imageUrl:
        'https://avatars.githubusercontent.com/u/92898110?v=4',
      twitterUrl: '#',
      linkedinUrl: 'https://www.linkedin.com/in/tanyagonzalez/',
    },

    {
        name: 'Don-EL',
        role: 'Front-End',
        imageUrl:
          'https://media-exp1.licdn.com/dms/image/C5603AQHlZdd9x7Q4rQ/profile-displayphoto-shrink_800_800/0/1652917802132?e=1658361600&v=beta&t=fCpe_bsJlCq4xzcdNnvXjNU2V6zm-04ir3W-KPp57P0',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/in/donovan-looney-190941233/',
      },

      {
        name: 'Ashley',
        role: 'Back-End',
        imageUrl:
          'https://avatars.githubusercontent.com/u/95392451?v=4',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/in/ashley-hodge-227285138/',
      },

      {
        name: 'Paul',
        role: 'Back-End',
        imageUrl:
          'https://avatars.githubusercontent.com/u/95047881?v=4',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/in/paul-shertzinger-5a9869b3/',
      },
    // More people...
  ]


  
  export default function Example() {
    return (
      <div className="bg-gray-900">
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
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
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

  