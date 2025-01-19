

import React, { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { jsPDF } from "jspdf";
import svgToPdf from "svg-to-pdfkit";
import { Canvg } from "canvg";

function DailyHoroscope() {
  const [response, setResponse] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [svglink, setSvglink] = useState('')
  const svgRef = useRef();









  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);

    try {
      const response = await axios.post("http://localhost:3000/api/RasiInsight", {
        year,
        month,
        date: day,
        hours,
        minutes,
        city,
      });
      if (response?.data) {
        setResponse(response.data.output);
        const response2 = await axios.post("http://localhost:3000/api/rasiRoute", {
        year,
        month,
        date: day,
        hours,
        minutes,
        city,
      });
      if(response2?.data){
        setSvglink(response2.data.output)
        console.log(response2.data);
      }
        const userData = { city: city,day:date,time:time,state:state };
        localStorage.setItem('userData',JSON.stringify(userData))
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };




  // Function to format and display the response
  const renderFormattedResponse = (text) => {
    if (!text) return null;

    const sections = text
      .split("###")
      .map((section) => section.trim()) // Trim spaces
      .filter((section) => section); // Remove empty sections

    return sections.map((section, index) => {
      const lines = section.split("\n").filter((line) => line); // Split into lines
      const heading = lines[0]?.replace(/^#+\s*/, ""); // Extract heading
      const body = lines.slice(1).join("\n"); // Join the rest as body

      return (
        <div key={index} className="mb-6">
          {heading && <h3 className="text-yellow-300 text-xl font-bold mb-2">{heading}</h3>}
          <p
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: body.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"), // Bold text
            }}
          />
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <a
          href="/"
          className="inline-flex items-center text-gray-300 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </a>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-900/50 backdrop-blur-md p-8 rounded-xl border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-yellow-300 mb-8">Your Cosmic Profile</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Birth Time
                  </label>
                  <input
                    type="time"
                    required
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="State"
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
              >
                Reveal Your Cosmic Journey
              </button>
            </form>
          </div>

          {/* Response Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-yellow-300">Your Daily Horoscope</h2>

            {loading ? (
              <div className="flex items-center justify-center h-40 bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" />
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            ) : response ? (
              <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-xl border border-gray-700">
                {renderFormattedResponse(response)}
              </div>
            ) : (
              <div className="flex items-center justify-center h-40 bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-700 text-gray-400">
                Fill out your details to receive your personalized horoscope.
              </div>
            )}

            {svglink && (
              <img
                src={svglink}
                alt="Generated Chart"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyHoroscope;
