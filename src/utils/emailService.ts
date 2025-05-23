
export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<Response> {
  try {
    const response = await fetch('https://kind-access.vercel.app/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
