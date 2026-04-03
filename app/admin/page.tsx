"use client";

import { useState, useRef } from "react";
import { uploadFile } from "@/lib/upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Copy, Upload, Lock } from "lucide-react";

interface UploadedFile {
  name: string;
  url: string;
  type: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
    } else {
      toast.error("Contraseña incorrecta");
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    setProgress(0);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const url = await uploadFile(file);
        setUploadedFiles((prev) => [{ name: file.name, url, type: file.type }, ...prev]);
        setProgress(Math.round(((i + 1) / files.length) * 100));
        toast.success(`${file.name} subido correctamente`);
      } catch {
        toast.error(`Error subiendo ${file.name}`);
      }
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copiada al portapapeles");
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-sm space-y-4 p-8 border rounded-xl shadow-sm">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Lock className="w-5 h-5" />
            Panel de administración
          </div>
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          <Button className="w-full" onClick={handleLogin}>
            Entrar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-2xl font-semibold">Subir archivos</h1>
      <div
        className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
        <p className="text-muted-foreground">Haz clic para seleccionar fotos o vídeos</p>
        <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WEBP, MP4, MOV — sin límite de tamaño</p>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          multiple
          accept="image/*,video/*"
          onChange={handleUpload}
        />
      </div>
      {uploading && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Subiendo... {progress}%</p>
          <Progress value={progress} />
        </div>
      )}
      
