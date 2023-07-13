import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from '@/components/ui/card';
import { createUser } from '@/services/api/fetchers/users';
import { User } from '@/lib/models/user';

interface State {
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}

const App = () => {
    const [state, setState] = useState<State>({
        firstName: '',
        lastName: '',
        isAdmin: false,
    });

    const user = {
        firstName: 'Ryan',
        lastName: 'Huber',
        isAdmin: true,
    };

    const mutation = useMutation({
        mutationFn: async (userParams: User) => createUser(userParams),
        onSuccess: async (data) =>
            setState({
                firstName: data?.firstName || '',
                lastName: data?.lastName || '',
                isAdmin: data?.isAdmin || false,
            }),
    });

    console.log(mutation.data);

    return (
        <div className='flex h-screen items-center justify-center'>
            <Card className='flex w-fit flex-col items-center justify-center'>
                <CardHeader className='justify-center'>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>{state.firstName}</CardDescription>
                </CardHeader>
                <CardContent>Content</CardContent>
                <CardFooter>
                    <Button
                        variant='destructive'
                        onClick={() => mutation.mutate(user)}
                    >
                        Click Me{' '}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default App;
