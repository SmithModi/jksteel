import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

interface WhatsAppEnquiryProps {
  productName: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "glass";
}

export const WhatsAppEnquiry = ({ 
  productName, 
  className = "", 
  size = "default",
  variant = "default" 
}: WhatsAppEnquiryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");

  const handleSendEnquiry = () => {
    if (!customerName.trim() || !customerNumber.trim()) {
      return;
    }

    const message = `Hi! I'm interested in the ${productName}. 

Customer Details:
Name: ${customerName}
Phone: ${customerNumber}

Please share more details about pricing and availability. Thank you!`;

    const whatsappUrl = `https://wa.me/919510174496?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close dialog
    setCustomerName("");
    setCustomerNumber("");
    setIsOpen(false);
  };

  const getButtonVariant = () => {
    if (variant === "glass") return "liquid-glass-button";
    return variant;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size={size} 
          className={`${getButtonVariant()} bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp Enquiry
        </Button>
      </DialogTrigger>
      
      <DialogContent className="glass-card border-white/20" onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle className="text-foreground">
            Enquiry for {productName}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details below and we'll send a WhatsApp message with your enquiry.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4" onClick={(e) => e.stopPropagation()}>
          <div className="space-y-2">
            <Label htmlFor="customer-name" className="text-foreground">
              Your Name *
            </Label>
            <Input
              id="customer-name"
              placeholder="Enter your full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="glass-card border-white/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="customer-number" className="text-foreground">
              Phone Number *
            </Label>
            <Input
              id="customer-number"
              placeholder="Enter your phone number"
              value={customerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="glass-card border-white/20"
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button 
              variant="outline" 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="glass-button border-white/20"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                handleSendEnquiry();
              }}
              disabled={!customerName.trim() || !customerNumber.trim()}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Enquiry
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};