
import CIM2Matpower

# from scipy.io import savemat

cim_to_matpower_filename = 'CIM_to_Matpower_import'

###########################################
# for testing purposes
#if __name__ == "__main__":
# boundary_profiles = ['G:/RTEDataNDAOnly/ENTSO_boundaries/ENTSO-E_Boundary_Set_EU_EQ.xml',
#                      'G:/RTEDataNDAOnly/ENTSO_boundaries/ENTSO-E_Boundary_Set_EU_TP.xml']
#
# cimfiles = ['G:/RTEDataNDAOnly/RTE_CIM_FILES_PILOTTEST_02052016/New_Version_of_CIMs_FOR_KUL_3/20130116_0030_FO_FR0/20130116_0030_FO3_FR0_EQ.xml',
#             'G:/RTEDataNDAOnly/RTE_CIM_FILES_PILOTTEST_02052016/New_Version_of_CIMs_FOR_KUL_3/20130116_0030_FO_FR0/20130116_0030_FO3_FR0_TP.xml',
#             'G:/RTEDataNDAOnly/RTE_CIM_FILES_PILOTTEST_02052016/New_Version_of_CIMs_FOR_KUL_3/20130116_0030_FO_FR0/20130116_0030_FO3_FR0_SV.xml']

# cimfiles = [
#     'D:/GQP_NEW/python_libs/cim2busbranch/test/data/20130116-1930-60Nodes-without-isolated-substations_MODIFIED/20130116-1930-60Nodes-without-isolated-substations_EQ.xml',
#     'D:/GQP_NEW/python_libs/cim2busbranch/test/data/20130116-1930-60Nodes-without-isolated-substations_MODIFIED/20130116-1930-60Nodes-without-isolated-substations_TP.xml',
#     'D:/GQP_NEW/python_libs/cim2busbranch/test/data/20130116-1930-60Nodes-without-isolated-substations_MODIFIED/20130116-1930-60Nodes-without-isolated-substations_SV.xml',
#     ]

# boundary_profiles = []
# cimfiles = ['D:\\GoogleDrive\\KU_Leuven\\CIM\\Examples\\VITO\\nyforsnetwork\\71c7400a-abc2-460b-868c-9c164f0eed7c.xml']


# cimfiles = 'G:/Konstantin/trunk/GQP/python_libs/CIM2Matpower/test/ENTSO-E_Boundary_Set_EU_EQ.xml'
cimfiles = ['./UCTE10_20090319_EQ.xml',
            './UCTE10_20090319_TP.xml',
            './UCTE10_20090319_SV.xml']

boundary_profiles = []

mpc = CIM2Matpower.cim_to_mpc(cimfiles, boundary_profiles)  #, 'imported_CIM.log')

# savemat(cim_to_matpower_filename+'.mat', mpc)

# pass