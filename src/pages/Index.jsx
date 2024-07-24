import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-red-500 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
        
        <Card className="mb-6 bg-red-600">
          <CardHeader>
            <h2 className="text-2xl font-semibold">About</h2>
          </CardHeader>
          <CardContent>
            <p>This is a bare-bones application that you can modify and build upon.</p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-red-600">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Features</h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>React components</li>
              <li>Tailwind CSS for styling</li>
              <li>Shadcn UI components</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-red-600">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Actions</h2>
          </CardHeader>
          <CardContent>
            <Button className="mr-2 bg-red-700 hover:bg-red-800">Primary Action</Button>
            <Button variant="outline" className="text-white border-white hover:bg-red-700">Secondary Action</Button>
          </CardContent>
        </Card>

        {/* New Card */}
        <Card className="mb-6 bg-red-600">
          <CardHeader>
            <h2 className="text-2xl font-semibold">New Card</h2>
          </CardHeader>
          <CardContent>
            <p>This is a new card that you can customize as needed.</p>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-48 my-4" />
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-red-700 hover:bg-red-800">Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;