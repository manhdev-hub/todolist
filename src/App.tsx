import { Container, Stack } from '@mui/material';
import { CreateTask, Tasks } from 'src/components';
function App() {
    return (
        <Container>
            <Stack className="App" py={10} flexDirection={{ md: 'row', xs: 'column' }} width="100%">
                <CreateTask />
                <Tasks />
            </Stack>
        </Container>
    );
}

export default App;
