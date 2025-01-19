import axios from 'axios'

const apiKey = '515a8f90176b42558df4f426830391ea'; // Replace with your OpenCage API key



async function forwardGeocode(address) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        if (response.data.results.length > 0) {
            console.log('Coordinates:', response.data.results[0].geometry);
            return response.data.results[0].geometry
        } else {
            console.log('No results found');
        }
    } catch (error) {
        console.error('Error:', error.message);
    } 
}


function convertDataToString(data) {
    const planets = Object.values(data)
      .filter(planet => planet.name !== 'ayanamsa' && planet.name !== 'debug')
      .map(planet => {
        const { name, current_sign, fullDegree, normDegree, isRetro } = planet;
  
        // Check if fullDegree and normDegree exist before calling toFixed
        const formattedFullDegree = fullDegree !== undefined ? fullDegree.toFixed(4) : 'N/A';
        const formattedNormDegree = normDegree !== undefined ? normDegree.toFixed(4) : 'N/A';
  
        return `- ${name}: sign=${current_sign}, fullDegree=${formattedFullDegree}, normDegree=${formattedNormDegree}, isRetro=${isRetro}`;
      }).join('\n');
  
    const ayanamsa = data["13"];
    const debug = data["debug"];
  
    return `Planets:\n${planets}\n\nAyanamsa: value=${ayanamsa.value.toFixed(4)}, type=lahiri\nDebug: observation_point=${debug.observation_point}`;
  }


  const RasiInsight = async (req, res) => {

    try {
        const url = 'https://json.freeastrologyapi.com/planets';
        const headers2 = {
            'Content-Type': 'application/json',
            'x-api-key': process.env.ASTRO_API
        };
        const {year,month,date,hours,minutes,city} = req.body;
        console.log(date);
        console.log(month);
        console.log(year);
        const posti = await forwardGeocode(city)
        const data = {
            "year": year,
            "month": month,
            "date": date,
            "hours": hours,
            "minutes": minutes,
            "seconds": 0,
            "latitude": posti.lat,
            "longitude": posti.lng,
            "timezone": 5.5,
            "settings": {
                "observation_point": "topocentric",
                "ayanamsha": "lahiri"
            }
        };

        const response = await axios.post(url, data, { headers:headers2 });

        const result = convertDataToString(response.data.output[0])
        console.log(result);
        
        const apiUrl = `${process.env.BASE_API_URL}/lf/${process.env.LANGFLOW_ID}/api/v1/run/${process.env.ENDPOINT}`;
        const payload = {
            input_value: result,
            output_type: "chat",
            input_type: "chat",
        };
        const headers = {
            Authorization: `Bearer ${process.env.APPLICATION_TOKEN}`,
            "Content-Type": "application/json",
        };
        console.log("langflow flow started");
        const response2 = await axios.post(apiUrl, payload, { headers });
        console.log(response2.data.outputs[0].outputs[0].results.message.text);
        console.log({result:response.data.output[0],output:response2.data.outputs[0].outputs[0].results.message.text});
        return res.status(200).json({result:response.data.output[0],output:response2.data.outputs[0].outputs[0].results.message.text})
    } catch (error) {
        console.error('Error:', error);
    }
}

const rasiChart = async (req,res) => {
    const url = 'https://json.freeastrologyapi.com/horoscope-chart-url';
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ASTRO_API  
    };
    const {year,month,date,hours,minutes,seconds,city} = req.body;
    const posti = await forwardGeocode(city)
    const data = {
        "year": year,
        "month": month,
        "date": date,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,
      "latitude": posti.lat,
      "longitude": posti.lng,
      "timezone": 5.5,
      "config": {
        "observation_point": "topocentric",
        "ayanamsha": "lahiri"
      }
    };
  
    try {
      const response = await axios.post(url, data, { headers });
      
      console.log(response.data);
      return res.status(200).json(response.data)
    } catch (error) {
      console.error('Error fetching horoscope chart:', error);
    }
  };

  const zodiacSign = async(req,res)=>{
    const url = 'https://json.freeastrologyapi.com/planets/extended';
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ASTRO_API  
    };
    const {year,month,date,hours,minutes,seconds,city} = req.body;
    const posti = await forwardGeocode(city)
    const data = {
        "year": year,
        "month": month,
        "date": date,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,
      "latitude": posti.lat,
      "longitude": posti.lng,
      "timezone": 5.5,
      "settings": {
        "observation_point": "topocentric",
        "ayanamsha": "lahiri",
        "language": "en"
      }
    };
  
    try {
      const response = await axios.post(url, data, { headers });
      
      console.log(response.data);
      return res.status(200).json(response.data.output.Ascendant.zodiac_sign_name)
    } catch (error) {
      console.error('Error fetching zodiacSign:', error);
    }
  }


  const zodiacData = async(req,res)=>{
    try {
      
    
        const {zodiac}=req.body
        const apiUrl = `${process.env.BASE_API_URL1}/lf/${process.env.LANGFLOW_ID1}/api/v1/run/${process.env.ENDPOINT1}`;
        const payload = {
            input_value: zodiac,
            output_type: "chat",
            input_type: "chat",
        };
        const headers = {
            Authorization: `Bearer ${process.env.APPLICATION_TOKEN1}`,
            "Content-Type": "application/json",
        };
        console.log("langflow flow started");
        const response2 = await axios.post(apiUrl, payload, { headers });
        console.log(response2.data.outputs[0].outputs[0].results.message.text);
        return res.status(200).json(response2.data.outputs[0].outputs[0].results.message.text)
      } catch (error) {
      console.log(error);
      }
  }
  
  const ChatbotLLM = async(req,res)=>{
    
    const {message} = req.body
    const apiUrl = `${process.env.BASE_API_URL2}/lf/${process.env.LANGFLOW_ID2}/api/v1/run/${process.env.ENDPOINT2}`;
    const payload = {
      input_value: message,
      output_type: "chat",
      input_type: "chat",
    };
    const headers = {
      Authorization: `Bearer ${process.env.APPLICATION_TOKEN2}`,
      "Content-Type": "application/json",
    };
    
    try {
      console.log("langflow flow started");
        const response2 = await axios.post(apiUrl, payload, { headers });
        console.log(response2.data.outputs[0].outputs[0].results.message.text);
        return res.status(200).json(response2.data.outputs[0].outputs[0].results.message.text)
     
      } catch (error) {
        console.error("Error calling API:", error.message);
        throw error;
      }
    }
    export { RasiInsight,rasiChart,zodiacSign,zodiacData,ChatbotLLM };