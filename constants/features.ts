//FEATURES SECTION
import { CloudArrowUpIcon, ChartBarIcon, ShareIcon,   } from '@heroicons/react/20/solid'

export const features = [
    {
        name: 'Real-time Collaboration',
        description:
          'Work together with your team on documents simultaneously. See changes live as they happen and communicate through integrated chat.',
        icon: ChartBarIcon, // Use an icon that represents real-time communication or collaboration
      },
      {
        name: 'Version History',
        description:
          'Track changes made to your documents over time. Revert to previous versions and see who made specific changes.',
        icon: CloudArrowUpIcon, // Choose an icon that symbolizes history or version control
      },
      {
        name: 'Document Sharing',
        description:
          'Easily share documents with others. Set permissions to view, comment, or edit, and manage access securely.',
        icon: ShareIcon, // Use an icon representing sharing or permissions
      }
    ]
