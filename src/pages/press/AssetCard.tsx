
import type React from "react";
import { Download, FileImage, FileText } from "lucide-react";
import type { PressAsset } from "@/shared/types/types";
import { Logo } from "@/shared/layout/Logo";

interface AssetCardProps {
    asset: PressAsset;
    onDownload: (title: string) => void;
}

export const AssetCard: React.FC<AssetCardProps> = ({ asset, onDownload }) => {
    return (
        <div
            key={asset.id}
            className="group bg-studio-card hover:border-studio-accent/50 relative overflow-hidden rounded-xl border border-white/5 transition-all duration-300"
        >
            {/* Thumbnail */}
            <div
                className={`relative flex h-40 w-full items-center justify-center overflow-hidden bg-cover bg-top ${asset.type === "Logo" ? asset.thumbnail : ""
                    }`}
                style={
                    asset.type === "Kit" || asset.type === "Guide"
                        ? { backgroundImage: `url(${asset.thumbnail})` }
                        : {}
                }
            >
                {/* Dark overlay that appears on hover to help contrast the button, MUST be below the button but above image */}
                <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />

                {/* Icons and Text (Lower Z-index) */}
                {asset.type === "Logo" && (
                    <div className="flex items-center gap-3">
                        <Logo />
                        <div className="text-studio-black font-display z-0 text-3xl font-bold transition-opacity group-hover:opacity-20">
                            NEBULA
                        </div>
                    </div>
                )}

                {/* Button - Higher Z-index */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                        onClick={() => onDownload(asset.title)}
                        className="text-studio-black hover:bg-studio-accent scale-90 transform rounded-full bg-white p-3 shadow-lg transition-colors group-hover:scale-100 hover:text-white"
                        title="Download Asset"
                    >
                        <Download className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="bg-studio-card relative z-20 p-6">
                <div className="mb-3 flex items-center gap-2">
                    {asset.type === "Guide" && (
                        <FileText className="text-studio-light h-4 w-4" />
                    )}
                    {asset.type === "Logo" && (
                        <FileImage className="text-studio-light h-4 w-4" />
                    )}
                    {asset.type === "Kit" && (
                        <FileImage className="text-studio-light h-4 w-4" />
                    )}
                    <span className="text-studio-accent text-xs font-bold tracking-wider uppercase">
                        {asset.format} • {asset.size}
                    </span>
                </div>
                <h3 className="font-display group-hover:text-studio-accent text-lg font-bold text-white transition-colors">
                    {asset.title}
                </h3>
            </div>
        </div>
    );
};
