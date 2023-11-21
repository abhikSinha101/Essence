import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

interface Props {
  image: string;
}

export default async function UserCard({ image }: Props) {
  const router = useRouter();

  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  return (
    <div className="leftsidebar_profile">
      <div className="flex flex-row items-center gap-4">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer">
              <Image src={userInfo.image} alt="logout" width={24} height={24} />
            </div>
          </SignOutButton>
        </SignedIn>
        <div className="flex flex-col gap-0">
          <p className="text-dark-1 text-small-regular">UserName</p>
          <p className="text-dark-3 text-subtle-medium">BOM</p>
        </div>
      </div>

      <Link href="">
        <Image src="/assets/moon.svg" alt="theme icon" width={24} height={24} />
      </Link>
    </div>
  );
}
