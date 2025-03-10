import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setEmailNotifications(localStorage.getItem("emailNotifications") === "true");
    setPushNotifications(localStorage.getItem("pushNotifications") === "true");
    setDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);

  interface HandleToggle {
    (setting: string, setter: React.Dispatch<React.SetStateAction<boolean>>): void;
  }

  const handleToggle: HandleToggle = (setting, setter) => {
    setter((prev) => {
      const newValue = !prev;
      localStorage.setItem(setting, newValue.toString());
      return newValue;
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email updates about your tasks
                </p>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={() => handleToggle("emailNotifications", setEmailNotifications)} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about task updates in real-time
                </p>
              </div>
              <Switch checked={pushNotifications} onCheckedChange={() => handleToggle("pushNotifications", setPushNotifications)} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle dark mode theme
                </p>
              </div>
              <Switch checked={darkMode} onCheckedChange={() => handleToggle("darkMode", setDarkMode)} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="destructive">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
