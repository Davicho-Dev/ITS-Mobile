import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

import 'react-native-reanimated';

const queryClient = new QueryClient();

const RootLayout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Stack
				screenOptions={{
					headerTitleAlign: 'center',
					contentStyle: {
						padding: 24,
						backgroundColor: 'white',
					},
				}}
			>
				<Stack.Screen name='index' options={{ title: 'Users' }} />
				<Stack.Screen name='users/[id]/index' options={{ title: 'User by ID' }} />
				<Stack.Screen name='create' options={{ title: 'Create User' }} />
				<Stack.Screen name='users/[id]/edit/index' options={{ title: 'Edit User' }} />
				<StatusBar style='auto' />
			</Stack>
		</QueryClientProvider>
	);
};
export default RootLayout;
