
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FontSize, Eye, AccessibilityIcon } from 'lucide-react';

const AccessibilityTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  
  // Apply font size
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);
  
  // Apply high contrast
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);
  
  // Increase font size
  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };
  
  // Decrease font size
  const decreaseFontSize = () => {
    if (fontSize > 90) {
      setFontSize(fontSize - 10);
    }
  };
  
  // Toggle high contrast
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };
  
  return (
    <div className="fixed top-20 right-4 md:right-8 z-30">
      <TooltipProvider>
        <div className="flex flex-col items-end">
          {/* Toggle Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="h-12 w-12 rounded-full bg-primary text-white shadow-lg"
                aria-label="Accessibility Tools"
              >
                <AccessibilityIcon size={24} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Accessibility Options</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Tools Panel */}
          {isOpen && (
            <div className="mt-4 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Font Size</h3>
                <div className="flex items-center">
                  <Button 
                    onClick={decreaseFontSize}
                    variant="outline"
                    size="sm"
                    disabled={fontSize <= 90}
                    className="mr-2"
                  >
                    A-
                  </Button>
                  <span className="mx-2 text-sm">{fontSize}%</span>
                  <Button
                    onClick={increaseFontSize}
                    variant="outline"
                    size="sm"
                    disabled={fontSize >= 150}
                    className="ml-2"
                  >
                    A+
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Display</h3>
                <Button
                  onClick={toggleHighContrast}
                  variant={highContrast ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  <Eye className="mr-2" size={16} />
                  {highContrast ? 'Normal Contrast' : 'High Contrast'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default AccessibilityTools;
