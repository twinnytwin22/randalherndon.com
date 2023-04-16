import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import GitHubButtonProps from '@/types/GitHubButtonProps';

const MyGitHubButton = ({

}) => {
    return (
        <Link
            href="https://github.com/twinnytwin22"
            className="rounded-lg p-4 h-fit text-xl hover:scale-105 text-white bg-gray-800"
        >
            <FaGithub />
        </Link>
    );
};

export default MyGitHubButton;
