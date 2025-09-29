import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const DesignProjects = ({
  projects,
  onCreateProject,
  onEditProject,
  onDeleteProject,
}) => {
  const [viewMode, setViewMode] = useState('grid');

  const getProjectStatus = (status) => {
    switch (status) {
      case 'completed':
        return { color: 'bg-green-100 text-green-800', icon: 'CheckCircle' };
      case 'in-progress':
        return { color: 'bg-blue-100 text-blue-800', icon: 'Clock' };
      case 'planning':
        return { color: 'bg-yellow-100 text-yellow-800', icon: 'Lightbulb' };
      default:
        return { color: 'bg-gray-100 text-gray-800', icon: 'Circle' };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-brand-primary">
            Design Projects
          </h2>
          <p className="text-secondary">{projects?.length} saved projects</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-brand ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-brand ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            onClick={onCreateProject}
            className="bg-brand-cta hover:bg-brand-cta/90"
          >
            New Project
          </Button>
        </div>
      </div>
      {/* Projects Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => {
            const statusInfo = getProjectStatus(project?.status);
            return (
              <div
                key={project?.id}
                className="group border border-brand rounded-lg overflow-hidden hover:shadow-brand transition-brand"
              >
                {/* Project Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    draggable="false"
                    src={project?.thumbnail}
                    alt={project?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-brand"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-brand">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        iconName="Eye"
                        className="bg-white/90 hover:bg-white"
                      >
                        View
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        iconName="Edit"
                        onClick={() => onEditProject(project?.id)}
                        className="bg-white/90 hover:bg-white"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusInfo?.color}`}
                    >
                      <Icon
                        name={statusInfo?.icon}
                        size={12}
                        className="mr-1"
                      />
                      {project?.status?.charAt(0)?.toUpperCase() +
                        project?.status?.slice(1)}
                    </span>
                  </div>
                </div>
                {/* Project Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-brand-primary mb-2">
                    {project?.name}
                  </h3>
                  <p className="text-sm text-secondary mb-3 line-clamp-2">
                    {project?.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-secondary mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Home" size={14} />
                      {project?.roomType}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Package" size={14} />
                      {project?.itemCount} items
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary">Total Budget</p>
                      <p className="font-semibold text-brand-primary">
                        ${project?.totalBudget}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-secondary">Last Updated</p>
                      <p className="text-sm text-brand-primary">
                        {project?.lastUpdated}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-secondary">Progress</span>
                      <span className="text-sm font-medium text-brand-primary">
                        {project?.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-brand-cta h-2 rounded-full transition-brand"
                        style={{ width: `${project?.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {projects?.map((project) => {
            const statusInfo = getProjectStatus(project?.status);
            return (
              <div
                key={project?.id}
                className="flex items-center gap-4 p-4 border border-brand rounded-lg hover:shadow-brand transition-brand"
              >
                <img
                  draggable="false"
                  src={project?.thumbnail}
                  alt={project?.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-brand-primary">
                      {project?.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusInfo?.color}`}
                    >
                      <Icon
                        name={statusInfo?.icon}
                        size={12}
                        className="mr-1"
                      />
                      {project?.status?.charAt(0)?.toUpperCase() +
                        project?.status?.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-secondary mb-2 line-clamp-1">
                    {project?.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-secondary">
                    <span className="flex items-center gap-1">
                      <Icon name="Home" size={14} />
                      {project?.roomType}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Package" size={14} />
                      {project?.itemCount} items
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="DollarSign" size={14} />$
                      {project?.totalBudget}
                    </span>
                    <span>Updated {project?.lastUpdated}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right mr-4">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-brand-cta h-2 rounded-full"
                        style={{ width: `${project?.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-secondary">
                      {project?.progress}%
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" iconName="Eye">
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Edit"
                    onClick={() => onEditProject(project?.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Trash2"
                    onClick={() => onDeleteProject(project?.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {projects?.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="Layout"
            size={48}
            className="text-gray-300 mx-auto mb-4"
          />
          <h3 className="text-lg font-medium text-gray-500 mb-2">
            No design projects yet
          </h3>
          <p className="text-gray-400 mb-4">
            Create your first room design project
          </p>
          <Button variant="default" iconName="Plus" onClick={onCreateProject}>
            Create Project
          </Button>
        </div>
      )}
    </div>
  );
};

export default DesignProjects;
