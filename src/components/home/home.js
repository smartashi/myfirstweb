import './Home.css';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import img5 from '../../images/billi.png';

const Home = () => {
  const [Month, setMonth] = React.useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <>
      <div className="bodyy">
        <div className="left">
          <div className="items">
            <ul className="it2">
              <div className="one">
                <span class="material-symbols-outlined">home</span>
                <li>Home</li>
              </div>
              <div className="one">
                <span class="material-symbols-sharp">content_copy</span>
                <li>Your Files</li>
              </div>
              <div className="one">
                <span class="material-symbols-sharp">delete</span>
                <li>Deleted Files</li>
              </div>
              <div className="one">
                <span class="material-symbols-sharp">star</span>
                <li>Starred</li>
              </div>
            </ul>
          </div>
          <div className="itemscloud">
            <div className="cloudd">
              <span class="material-symbols-outlined">cloud</span>
              <p>Storage</p>
            </div>
            <div className="line"></div>
            <div className="text"><p>0 MB of 500 MB used!</p></div>

          </div>
        </div>
        <div className="middle">
          <div className="top">
            <h2>Welcome Allen :) </h2>
            <p>Welcome to your Curative Zone, We’re excited to have you here !</p>
          </div>
          <div className="import">
            <div className="location">
              <div className="part"><span class="material-symbols-outlined">add</span></div>
              <div className="part2">
                <h3>New File</h3>
                <p>A perfect canvas for your ideas.</p>
              </div>
            </div>
            <div className="location">
              <div className="part"><span class="material-symbols-outlined">add</span></div>
              <div className="part2">
                <h3>Import Files</h3>
                <p>Import file from other design tool.Know more.</p>
              </div>
            </div>
          </div>
          <div className="recentfil">
            <div className="left1">
              <h2>Recent Files</h2>
              <p> A new file is the perfect canvas for your ideas. So why wait? Create a new file now and start expressing yourself in a whole new way </p>
            </div>
            <div className="right1">
              <div className="right-top">
                <span class="material-symbols-outlined">calendar_month</span>
                <p>Select Date</p>
              </div>
              <div className="rightdown">
                <div className="ala">
                  <Box sx={{ minWidth: 90 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Month</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Month}
                        label="Month"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="ala">
                  <Box sx={{ minWidth: 80 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Year</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Month}
                        label="Month"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
          </div>
          <div className="dashdash"></div>
          <div className="recentfiles">
            <img src={img5} alt="Not Found" />
          </div>
        </div>
        <div className="rightw">
          <div className="access">
            <div className="box1">
              <h2>Who has access?</h2>
              <p>Select File to view</p>
            <div className="dash"></div>
            </div>
            <div className="box1">
              <h2>Recently opened by:</h2>
              <p>Select File to view</p>
            <div className="dash"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;