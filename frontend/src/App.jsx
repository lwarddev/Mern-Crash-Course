import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import { useColorModeValue } from '@chakra-ui/react';

function App() {
  return (
    <Box
      minH={'100vh'}
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/create"
          element={<CreatePage />}
        />
      </Routes>
    </Box>
  );
}

export default App;
