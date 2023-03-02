import { Container, Stack } from '@mui/material';
import { CreateTask, Tasks } from 'src/components';
import Snackbar from 'src/components/Snackbar';
function App() {
    return (
        <Container>
            <Stack className="App" py={10} flexDirection={{ md: 'row', xs: 'column' }} width="100%">
                <CreateTask />
                <Tasks />
            </Stack>
            <Snackbar />
        </Container>
    );
}

export default App;
