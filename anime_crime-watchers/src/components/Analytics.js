// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   SkeletonText,
//   Text,
// } from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'

// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from '@react-google-maps/api'
// import { useRef, useState } from 'react'

// const center = { lat: 48.8584, lng: 2.2945 }

// function App() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries: ['places'],
//   })

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null))
//   const [directionsResponse, setDirectionsResponse] = useState(null)
//   const [distance, setDistance] = useState('')
//   const [duration, setDuration] = useState('')

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef()
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destiantionRef = useRef()

//   if (!isLoaded) {
//     return <SkeletonText />
//   }

//   async function calculateRoute() {
//     if (originRef.current.value === '' || destiantionRef.current.value === '') {
//       return
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService()
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destiantionRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     setDirectionsResponse(results)
//     setDistance(results.routes[0].legs[0].distance.text)
//     setDuration(results.routes[0].legs[0].duration.text)
//   }

//   function clearRoute() {
//     setDirectionsResponse(null)
//     setDistance('')
//     setDuration('')
//     originRef.current.value = ''
//     destiantionRef.current.value = ''
//   }

//   return (
//     <Flex
//       position='relative'
//       flexDirection='column'
//       alignItems='center'
//       h='100vh'
//       w='100vw'
//     >
//       <Box position='absolute' left={0} top={0} h='100%' w='100%'>
//         {/* Google Map Box */}
//         <GoogleMap
//           center={center}
//           zoom={15}
//           mapContainerStyle={{ width: '100%', height: '100%' }}
//           options={{
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//           }}
//           onLoad={map => setMap(map)}
//         >
//           <Marker position={center} />
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//       </Box>
//       <Box
//         p={4}
//         borderRadius='lg'
//         m={4}
//         bgColor='white'
//         shadow='base'
//         minW='container.md'
//         zIndex='1'
//       >
//         <HStack spacing={2} justifyContent='space-between'>
//           <Box flexGrow={1}>
//             <Autocomplete>
//               <Input type='text' placeholder='Origin' ref={originRef} />
//             </Autocomplete>
//           </Box>
//           <Box flexGrow={1}>
//             <Autocomplete>
//               <Input
//                 type='text'
//                 placeholder='Destination'
//                 ref={destiantionRef}
//               />
//             </Autocomplete>
//           </Box>

//           <ButtonGroup>
//             <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
//               Calculate Route
//             </Button>
//             <IconButton
//               aria-label='center back'
//               icon={<FaTimes />}
//               onClick={clearRoute}
//             />
//           </ButtonGroup>
//         </HStack>
//         <HStack spacing={4} mt={4} justifyContent='space-between'>
//           <Text>Distance: {distance} </Text>
//           <Text>Duration: {duration} </Text>
//           <IconButton
//             aria-label='center back'
//             icon={<FaLocationArrow />}
//             isRound
//             onClick={() => {
//               map.panTo(center)
//               map.setZoom(15)
//             }}
//           />
//         </HStack>
//       </Box>
//     </Flex>
//   )
// }

// export default App



import React from 'react';

// import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' /> */}
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Crime Watch Available</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Search this map for past and current crime reports.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          {/* Add map, api and submit crime tip links */}
        </div>
      </div>
     
    </div>
  );
};



export default Analytics;