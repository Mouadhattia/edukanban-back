const { 
  isTeacher, 
  isStudent, 
  isCurriculumDesigner, 
  isSuperAdmin, 
  isOrganisation, 
  isSchoolAdmin,
  hasAnyRole 
} = require('../middleware/auth');
const { ROLES } = require('../models/User');

describe('Role-Based Middleware Functions', () => {
  let mockReq;
  let mockRes;
  let nextFunction;

  beforeEach(() => {
    mockReq = {
      user: {}
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    nextFunction = jest.fn();
  });

  describe('Single Role Checks', () => {
    const testCases = [
      { middleware: isTeacher, role: ROLES.TEACHER, name: 'isTeacher' },
      { middleware: isStudent, role: ROLES.STUDENT, name: 'isStudent' },
      { middleware: isCurriculumDesigner, role: ROLES.CURRICULUM_DESIGNER, name: 'isCurriculumDesigner' },
      { middleware: isSuperAdmin, role: ROLES.SUPER_ADMIN, name: 'isSuperAdmin' },
      { middleware: isOrganisation, role: ROLES.ORGANISATION, name: 'isOrganisation' },
      { middleware: isSchoolAdmin, role: ROLES.SCHOOL_ADMIN, name: 'isSchoolAdmin' }
    ];

    testCases.forEach(({ middleware, role, name }) => {
      describe(name, () => {
        it(`should allow access for ${role} role`, () => {
          mockReq.user.role = role;
          middleware(mockReq, mockRes, nextFunction);
          expect(nextFunction).toHaveBeenCalled();
        });

        it(`should deny access for non-${role} role`, () => {
          mockReq.user.role = 'other-role';
          middleware(mockReq, mockRes, nextFunction);
          expect(mockRes.status).toHaveBeenCalledWith(403);
          expect(mockRes.json).toHaveBeenCalledWith({
            message: 'Access forbidden. Insufficient permissions.'
          });
        });
      });
    });
  });

  describe('hasAnyRole', () => {
    it('should allow access if user has any of the specified roles', () => {
      mockReq.user.role = ROLES.TEACHER;
      const middleware = hasAnyRole(ROLES.TEACHER, ROLES.SUPER_ADMIN);
      
      middleware(mockReq, mockRes, nextFunction);
      
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should deny access if user does not have any of the specified roles', () => {
      mockReq.user.role = ROLES.STUDENT;
      const middleware = hasAnyRole(ROLES.TEACHER, ROLES.SUPER_ADMIN);
      
      middleware(mockReq, mockRes, nextFunction);
      
      expect(mockRes.status).toHaveBeenCalledWith(403);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Access forbidden. Insufficient permissions.'
      });
    });

    it('should handle multiple role combinations', () => {
      mockReq.user.role = ROLES.SUPER_ADMIN;
      const middleware = hasAnyRole(
        ROLES.TEACHER,
        ROLES.SUPER_ADMIN,
        ROLES.CURRICULUM_DESIGNER
      );
      
      middleware(mockReq, mockRes, nextFunction);
      
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});