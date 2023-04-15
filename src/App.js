import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Photos from "./components/Photos";
import Navbar from "./components/Navbar";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>

    <Navbar />
      <Routes>

        <Route path='/photos/:searchTerm' element={<Photos />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
