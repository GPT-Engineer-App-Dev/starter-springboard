import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-2xl font-semibold">About</h2>
        </CardHeader>
        <CardContent>
          <p>This is a bare-bones application that you can modify and build upon.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
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

      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Actions</h2>
        </CardHeader>
        <CardContent>
          <Button className="mr-2">Primary Action</Button>
          <Button variant="outline">Secondary Action</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;