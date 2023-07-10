import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from './components/ui/card';

const App = () => (
    <div className='flex h-screen items-center justify-center'>
        <Card className='flex w-fit flex-col items-center justify-center'>
            <CardHeader className='justify-center'>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>
                <Button variant='destructive'>Click Me </Button>
            </CardFooter>
        </Card>
    </div>
);

export default App;
