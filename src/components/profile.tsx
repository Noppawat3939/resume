import { profile } from "@/data";

export default function Profile() {
  return (
    <section aria-label="profile-section" className="flex flex-col space-y-2">
      <p className="max-sm:text-xs">Profile</p>
      <div>
        <p className="text-gray-800/90 text-[15px] max-sm:text-[10px]">
          {profile}
        </p>
      </div>
    </section>
  );
}
