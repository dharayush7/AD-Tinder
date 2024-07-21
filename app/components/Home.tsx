"use client";
import * as React from "react";
import TinderCard from "react-tinder-card";
import { Neo4JUser } from "@/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { neo4jSwipe } from "../neo4j.action";

interface HomepageComponentsProps {
  currentUser: Neo4JUser;
  users: Neo4JUser[];
}
const HomepageComponents: React.FC<HomepageComponentsProps> = ({
  currentUser,
  users,
}) => {
  const handleSwipe = async (direction: string, userId: string) => {
    const isMatch = await neo4jSwipe(
      currentUser.applicationId,
      direction,
      userId
    );
    if (isMatch) alert(`Congrats!! Its a match`);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div>
        <div>
          <h1 className="text-4xl">
            Hi {currentUser.firstName} {currentUser.lastName}
          </h1>
        </div>
        <div className="mt-4 relative">
          {users.map((user) => (
            <TinderCard
              key={user.applicationId}
              onSwipe={(direction) =>
                handleSwipe(direction, user.applicationId)
              }
              className="absolute"
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    {user.firstName} {user.lastName}
                  </CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </CardHeader>
              </Card>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageComponents;
