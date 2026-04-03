import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "@/lib/storage";
import { randomUUID } from "crypto";

export async function POST(request) {
  const { filename, contentType } = await request.json();

  const ext = filename.split(".").pop();
  const key = `uploads/${randomUUID()}.${ext}`;

  const command = new PutObjectCommand({
    Bucket: process.env.B2_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  const signedUrl = await getSignedUrl(s3, command, {
    expiresIn: 900,
    unhoistableHeaders: new Set(["x-amz-checksum-crc32"]),
    unsignableHeaders: new Set(["content-length", "content-type"]),
  });

  const publicUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/${key}`;
  return Response.json({ signedUrl, publicUrl });
}
